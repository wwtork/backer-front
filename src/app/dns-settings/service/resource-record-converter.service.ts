import { Injectable } from "@angular/core";
import { ResourceRecord } from "../resource-record-entity/resource-record";
import { Factory as ResourceRecordsFactory } from "../resource-record-entity/factory";
import { DomainCdnSetting, DomainCdnType } from "../domain-cdn-setting";
import { ResourceRecordMx } from "../resource-record-entity/resource-record-mx";
import { WsrResourceRecords, WsrDomainResourceRecord } from "../wsr-interfaces";
import { ResourceRecordA } from "../resource-record-entity/resource-record-a";
import { ReferencesService } from "./references.service";
import { NodeGroup } from "../node-group";
import { ResourceRecordTxt } from "../resource-record-entity/resource-record-txt";
import { FormBuilder } from "@angular/forms";
import { Factory } from "../resource-record-component/factory";
import { ResourceRecordAaaa } from "../resource-record-entity/resource-record-aaaa";
import { ResourceRecordNs } from "../resource-record-entity/resource-record-ns";
import { ResourceRecordCname } from "../resource-record-entity/resource-record-cname";
import { ResourceRecordSrv } from "../resource-record-entity/resource-record-srv";
import { ResourceRecordCaa } from "../resource-record-entity/resource-record-caa";
import { ResourceRecordSoa } from "../resource-record-entity/resource-record-soa";

export function resourceRecordSorter(a: ResourceRecord, b: ResourceRecord): number {
	if (a.name == b.name){
		if (a.type == b.type){
			return 0;
		} else {
			return a.type < b.type ? -1 : 1;
		}
	} else {
		return a.name.length < b.name.length ? -1 : 1;
	}
}

@Injectable()
export class ResourceRecordsConverterService
{
	constructor(
		private referencesService: ReferencesService,
		private builder: FormBuilder
	){}

	private static clearObject(o: {}): void {
		for (let key in o) {
			if (o.hasOwnProperty(key)) {
				delete o[key];
			}
		}
	}

	public wsr2canonical(inDnsZone: WsrResourceRecords, inHostsList: any, outResourceRecords: ResourceRecord[], outCdnSettings: {[domain: string]: DomainCdnSetting}): void {
		outResourceRecords.splice(0, outResourceRecords.length); // clear
		ResourceRecordsConverterService.clearObject(outCdnSettings);

		let recA = {};

		for (let domain in inHostsList){
			if (!inHostsList.hasOwnProperty(domain)){
				continue;
			}
			let ip;
			for (let i = 0; i < inHostsList[domain].length; i++){
				ip = inHostsList[domain][i]['host_ip'];
				if (!recA.hasOwnProperty(domain)){
					recA[domain] = {};
				}
				recA[domain][ip] = ResourceRecordsConverterService.generateTtl();
			}
		}

		for (let domain in inDnsZone){
			if (!inDnsZone.hasOwnProperty(domain)){
				continue;
			}
			for (let type in inDnsZone[domain]){
				if (!inDnsZone[domain].hasOwnProperty(type)){
					continue;
				}
				for (let i = 0; i < inDnsZone[domain][type].length; i++){
					if (type == 'A'){
						let data = inDnsZone[domain][type][i].data;
						let domainCdnSetting: DomainCdnSetting;
						switch (data['ipsType']){
							case 'custom':
								let ip = data['ipsList'];
								if (!recA.hasOwnProperty(domain)){
									recA[domain] = {};
								}
								recA[domain][ip] = parseInt(inDnsZone[domain][type][i].ttl);
								if (!outCdnSettings.hasOwnProperty(domain)) {
									outCdnSettings[domain] = new DomainCdnSetting(DomainCdnType.None);
								}
								break;
							case 'auto':
								outCdnSettings[domain] = new DomainCdnSetting(DomainCdnType.Auto);
								break;
							case 'by_region':
								domainCdnSetting = new DomainCdnSetting(DomainCdnType.Region);
								for (let j = 0; j < data['ipsList'].length; j++){
									domainCdnSetting.regions.push({
										whoisCountry: data['ipsList'][j]['whois_country'],
										whoisRegion: data['ipsList'][j]['whois_region']
									});
								}
								outCdnSettings[domain] = domainCdnSetting;
								break;
							case 'by_group':
								domainCdnSetting = new DomainCdnSetting(DomainCdnType.Group);
								domainCdnSetting.group = new NodeGroup();
								domainCdnSetting.group.id = parseInt(data['ipsList'][0]);
								this.referencesService.getGroup(domainCdnSetting.group.id).then(
									group => {domainCdnSetting.group = group}
								);
								outCdnSettings[domain] = domainCdnSetting;
								break;
						}
					} else {
						let record = ResourceRecordsFactory.generate(type);
						record.name = domain;
						record.ttl = parseInt(inDnsZone[domain][type][i].ttl);
						ResourceRecordsConverterService.parseData(record, inDnsZone[domain][type][i].data);
						if (type == 'MX'){
							(record as ResourceRecordMx).preference = inDnsZone[domain][type][i].pri;
						}
						this.validateRecord(record);
						outResourceRecords.push(record);
					}
				}
			}
		}
		for (let domain in recA){
			if (!recA.hasOwnProperty(domain)){
				continue;
			}
			for (let ip in recA[domain]){
				if (!recA[domain].hasOwnProperty(ip)){
					continue;
				}
				let record = ResourceRecordsFactory.generate('A');
				record.name = domain;
				record.ttl = parseInt(recA[domain][ip]);
				(record as ResourceRecordA).address = ip;
				this.validateRecord(record);
				outResourceRecords.push(record);
			}
		}
		outResourceRecords.sort(resourceRecordSorter);
	}

	public canonical2wsr(domain: string, inResourceRecords: ResourceRecord[], inCdnSettings: {[domain: string]: DomainCdnSetting}, outDnsZone: WsrResourceRecords, outHostsList: any): void {
		ResourceRecordsConverterService.clearObject(outDnsZone);
		ResourceRecordsConverterService.clearObject(outHostsList);

		let wsrDomainResourceRecord: WsrDomainResourceRecord;
		for (let record of inResourceRecords){
			if (!record.valid){
				continue;
			}
			if (!outDnsZone.hasOwnProperty(record.name)){
				outDnsZone[record.name] = {};
			}
			if (!outDnsZone[record.name].hasOwnProperty(record.type)){
				outDnsZone[record.name][record.type] = [];
			}
			if (record.type == 'A'){
				let ip = (record as ResourceRecordA).address;

				if (record.name == domain) {
					if (!outHostsList.hasOwnProperty(record.name)){
						outHostsList[record.name] = [];
					}
					if (!outHostsList[record.name].find(element => {return element['host_ip'] == ip})){
						outHostsList[record.name].push(ResourceRecordsConverterService.generateHostListItem(ip));
					}
				} else {
					wsrDomainResourceRecord = {
						data: {ipsType: 'custom', ipsList: ip},
						ttl: record.ttl
					};
					outDnsZone[record.name][record.type].push(wsrDomainResourceRecord);
				}
			} else {
				wsrDomainResourceRecord = {
					data: ResourceRecordsConverterService.assembleData(record),
					ttl: record.ttl,
				};
				if (record.type == 'MX'){
					wsrDomainResourceRecord.pri = (record as ResourceRecordMx).preference;
				}
				outDnsZone[record.name][record.type].push(wsrDomainResourceRecord);
			}
		}
		for (let domain in inCdnSettings){
			if (!inCdnSettings.hasOwnProperty(domain)){
				continue;
			}
			switch (inCdnSettings[domain].type){
				case DomainCdnType.Auto:
					wsrDomainResourceRecord = {
						data: {ipsType: 'auto', auto_detect_nearest: true}, ///
						ttl: ResourceRecordsConverterService.generateTtl(),
					};
					outDnsZone[domain]['A'].push(wsrDomainResourceRecord);
					break;
				case DomainCdnType.Region:
					let regionList = [];
					for (let region of inCdnSettings[domain].regions){
						regionList.push({
							whois_country: region.whoisCountry,
							whois_region: region.whoisRegion
						})
					}
					wsrDomainResourceRecord = {
						data: {ipsType: 'by_region', ipsList: regionList},
						ttl: ResourceRecordsConverterService.generateTtl(),
					};
					outDnsZone[domain]['A'].push(wsrDomainResourceRecord);
					break;
				case DomainCdnType.Group:
					wsrDomainResourceRecord = {
						data: {ipsType: 'by_group', ipsList: [inCdnSettings[domain].group.id]},
						ttl: ResourceRecordsConverterService.generateTtl(),
					};
					outDnsZone[domain]['A'].push(wsrDomainResourceRecord);
					break;
			}
		}
	}

	private static parseData(record: ResourceRecord, data: string): void {
		let m: string[];
		switch (record.type){
			case 'MX':
				(record as ResourceRecordMx).exchange = data;
				break;
			case 'TXT':
				(record as ResourceRecordTxt).data = data;
				break;
			case 'AAAA':
				(record as ResourceRecordAaaa).data = data;
				break;
			case 'NS':
				(record as ResourceRecordNs).data = data;
				break;
			case 'CNAME':
				(record as ResourceRecordCname).data = data;
				break;
			case 'SRV':
				m = data.match(/^service:(.*),proto:(.*),priority:(.*),weight:(.*),port:(.*),target:(.*)$/);
				if (m !== null){
					let r = (record as ResourceRecordSrv);
					r.service = m[1];
					r.proto = m[2];
					r.priority = parseInt(m[3]);
					r.weight = parseInt(m[4]);
					r.port = parseInt(m[5]);
					r.target = m[6];
				}
				break;
			case 'CAA':
				m = data.match(/^flag:(.*),tag:(.*),value:(.*)$/);
				if (m !== null){
					let r = (record as ResourceRecordCaa);
					r.flag = parseInt(m[1]);
					r.tag = m[2];
					r.value = m[3];
				}
				break;
			case 'SOA':
				m = data.match(/^mname:(.*),rname:(.*),serial:(.*),refresh:(.*),retry:(.*),expire:(.*),minimum:(.*)$/);
				if (m !== null){
					let r = (record as ResourceRecordSoa);
					r.mname = m[1];
					r.rname = m[2];
					r.serial = parseInt(m[3]);
					r.refresh = parseInt(m[4]);
					r.retry = parseInt(m[5]);
					r.expire = parseInt(m[6]);
					r.minimum = parseInt(m[7]);
				}
				break;
		}
	}

	private static assembleData(record: ResourceRecord): string {
		switch (record.type){
			case 'MX':
				return (record as ResourceRecordMx).exchange;
			case 'TXT':
				return (record as ResourceRecordTxt).data;
			case 'AAAA':
				return (record as ResourceRecordAaaa).data;
			case 'NS':
				return (record as ResourceRecordNs).data;
			case 'CNAME':
				return (record as ResourceRecordCname).data;
			case 'SRV':
				let srv = (record as ResourceRecordSrv);
				return `service:${ srv.service },proto:${ srv.proto },priority:${ srv.priority },` +
				       `weight:${ srv.weight },port:${ srv.port },target:${ srv.target }`;
			case 'CAA':
				let caa = (record as ResourceRecordCaa);
				return `flag:${ caa.flag },tag:${ caa.tag },value:${ caa.value }`;
			case 'SOA':
				let soa = (record as ResourceRecordSoa);
				return `mname:${ soa.mname },rname:${ soa.rname },serial:${ soa.serial },refresh:${ soa.refresh },` +
				       `retry:${ soa.retry },expire:${ soa.expire },minimum:${ soa.minimum }`;
		}
		return '';
	}

	private static generateHostListItem(ip: string): {[p: string]: any} {
		return {
			host_ip: ip,
			check_type: 1,
			check_period_time: 60,
			check_url: '',
			needCodes: 200,
			minLength: 300,
			failedChecksCount: 2,
			succeedChecksCount: 2,
			responseTimeout: 20,
			needContent: '',
			backup: false,
			status: 'undefined'
		}
	}

	private static generateTtl(): number {
		return 60;
	}

	private validateRecord(record: ResourceRecord) {
		let essence = {};
			for (let p in record){
			if (!record.hasOwnProperty(p) || ['name', 'ttl', 'type', 'valid'].indexOf(p) != -1){
				continue;
			}
			essence[p] = record[p];
		}
		let formFields = Factory.generate(record.type).getFormFields();
		let form = this.builder.group(formFields);
		form.setValue(essence);
		record.valid = form.valid;
	}
}
