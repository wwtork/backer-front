import { Component, Input } from '@angular/core';
import { ResourceRecord } from './resource-record-entity/resource-record';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ResourceRecordA } from "./resource-record-entity/resource-record-a";
import { ResourceRecordModalContentComponent } from "./resource-record-modal-content.component";
import { DomainCdnSetting, DomainCdnType } from "./domain-cdn-setting";
import { GroupSelectorComponent } from "./group-selector.component";
import { NodeGroup } from "./node-group";
import { RegionSelectorComponent } from "./region-selector.component";
import { NodeRegion } from "./node-region";
import { WsrDnsInfo } from "./wsr-interfaces";
import { Factory as ResourceRecordsFactory } from "./resource-record-entity/factory";
import { ResourceRecordsConverterService, resourceRecordSorter } from "./service/resource-record-converter.service";

enum FieldErrorState {
	None, Hidden, Shown
}

@Component({
	selector: 'wsr-rr-list',
	styleUrls: ['./resource-record-list.component.css'],
	template: `
		<!--
		<button type="button" class="btn btn-default" (click)="logNames()">Names</button>
		<button type="button" class="btn btn-default" (click)="logRR()">Records</button>
		<button type="button" class="btn btn-default" (click)="logCdnSettings()">CDN settings</button>
		<button type="button" class="btn btn-default" (click)="assembleOutput()">Output</button>
		<br><br>-->
		
		<div class="container-fluid mobile">
			<div *ngFor="let resourceRecord of resourceRecords; let i = index" class="rr-item">
				<div class="rr-item-header">
					<div *ngIf="resourceRecord.type == 'A'" class="rr-cdn-setting">
						<wsr-domain-cdn-setting [value]="domainCdnSettings[resourceRecord.name]" (onVoted)="onChangeCdnSetting($event, domainCdnSettings[resourceRecord.name])"></wsr-domain-cdn-setting>
					</div>
					
					<div class="rr-name" [class.rr-a]="resourceRecord.type == 'A'">
						<div style="position: relative" [class.has-error]="!validateName(names[i])">
						<div class="popover error-popover bs-popover-top">
							<div class="arrow">
							</div>
							<div class="popover-body">
								Required a valid subdomain name, wildcard(*) or "@" for main domain
							</div>
						</div>
						<input class="form-control" [(ngModel)]="names[i]" (blur)="updateName(i)">
						</div>
					</div>
				</div>
				<div class="rr-item-body">
					<div style="display: table; width: 100%">
						<div style="display: table-row">
							<div style="display: table-cell">
								<div>Record type: <b>{{ resourceRecord.type }}</b></div>
								<div style="position: relative" [class.has-error]="!resourceRecord.valid" [class.wrong-value]="!resourceRecord.valid">
									<div class="popover error-popover bs-popover-top">
										<div class="arrow">
										</div>
										<div class="popover-body">
											Invalid value
										</div>
									</div>
									Value: <b style="position: relative">{{ resourceRecord.getDisplayedValue() }}</b>
								</div>
								<div>TTL: <b><wsr-popover-select-ttl [value]="resourceRecord.ttl" [valueList]="ttlValues" (onVoted)="onTtlChanged(i, $event)"></wsr-popover-select-ttl></b></div>
							</div>
							<div style="display: table-cell; vertical-align: middle; width: 1px; overflow: visible">
								<button class="icon edit-rr" (click)="editValue(resourceRecord)"></button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		
		<div class="container-fluid desktop">
		<table class="table table-striped records">
			<tr>
				<th style="width: 15%">Subdomain</th>
				<th style="width: 10%">Type</th>
				<th>Value</th>
				<th style="width: 15%">TTL</th>
				<th style="width: 25%">CDN mode</th>
				<th style="width: 38px"></th>
			</tr>
			<tr *ngFor="let resourceRecord of resourceRecords; let i = index" class="rr-item">
				<td>
					<div style="position: relative" [class.has-error]="!validateName(names[i])">
						<div class="popover error-popover bs-popover-top">
							<div class="arrow">
							</div>
							<div class="popover-body">
								Required a valid subdomain name, wildcard(*) or "@" for main domain
							</div>
						</div>
						<input class="form-control" [(ngModel)]="names[i]" (blur)="updateName(i)">
					</div>
				</td>
				<td>
					{{ resourceRecord.type }}
				</td>
				<td>
					<div style="position: relative" [class.has-error]="!resourceRecord.valid">
						<div class="popover error-popover bs-popover-top">
							<div class="arrow">
							</div>
							<div class="popover-body">
								Invalid value
							</div>
						</div>
						<input type="text"
							[value]="resourceRecord.getDisplayedValue()"
							class="form-control"
							placeholder="Value"
							(click)="editValue(resourceRecord)"
							(input)="editValue(resourceRecord)"
							(change)="undoManualInput(resourceRecord, $event.currentTarget)">
					</div>
				</td>
				<td>
					<wsr-popover-select-ttl [value]="resourceRecord.ttl" [valueList]="ttlValues" (onVoted)="onTtlChanged(i, $event)"></wsr-popover-select-ttl>
				</td>
				<td>
					<div *ngIf="resourceRecord.type == 'A'">
						<wsr-domain-cdn-setting [value]="domainCdnSettings[resourceRecord.name]" (onVoted)="onChangeCdnSetting($event, domainCdnSettings[resourceRecord.name])"></wsr-domain-cdn-setting>
					</div>
				</td>
				<td>
					<rr-rem [i]="i" (onConfirmed)="deleteRecord($event)"></rr-rem>
				</td>
			</tr>
		</table>
	</div>
	<div class="container-fluid">
		<div style="text-align: center" *ngIf="!formShown">
			<button type="button" class="add-record-button" (click)="formShown = true"><span class="plus-icon"></span>Add record</button>
		</div>
		<form (ngSubmit)="onSubmit()" class="record-editor" *ngIf="formShown">
			<div class="row">
				<div class="col-md-2">
					<div class="form-group" [class.has-error]="recordNameError == fieldErrorState.Shown">
						<label>Subdomain:</label>
						<div style="position: relative">
							<input type="text" [(ngModel)]="currentRecord.name" class="form-control" placeholder="Поддомен" name="name" (input)="recordNameError = fieldErrorState.Hidden">
							<div class="popover error-popover bs-popover-top" (click)="recordNameError = fieldErrorState.Hidden">
								<div class="arrow">
								</div>
								<div class="popover-body">
									Required a valid subdomain name, wildcard(*) or "@" for main domain
								</div>
							</div>
						</div>
					</div>
				</div>
				<div class="col-md-2">
					<div class="form-group">
						<label>Type:</label>
						<wsr-select [options]="['A', 'MX', 'SRV', 'TXT', 'CNAME', 'NS', 'SOA', 'AAAA', 'CAA']" [value]="currentRecord.type" (onChange)="changeRecordType($event)"></wsr-select>
					</div>
				</div>
				<div class="col-md-4">
					<div class="form-group" [class.has-error]="recordValueError == fieldErrorState.Shown">
						<label>Value:</label>
						<div style="position: relative">
							<input type="text"
								[value]="recordDisplayedValue"
								class="form-control"
								placeholder="Value"
								(click)="editValue(currentRecord)"
								(input)="editValue(currentRecord)"
								(change)="undoManualInput(currentRecord, $event.currentTarget)"
								#newRecordValue
								name="value">
							<div class="popover error-popover bs-popover-top" (click)="recordValueError = fieldErrorState.Hidden">
								<div class="arrow">
								</div>
								<div class="popover-body">
									A value is required
								</div>
							</div>
						</div>
					</div>
				</div>
				<div class="col-md-2">
					<div class="form-group">
						<label>TTL:</label>
						<wsr-select [options]="ttlValues" [value]="currentRecord.ttl" (onChange)="currentRecord.ttl = $event"></wsr-select>
					</div>
				</div>
				<div class="col-md-2">
					<div class="form-group">
						<label>&nbsp;</label>
						<button type="submit" class="btn btn-primary btn-block">Add record</button>
					</div>
				</div>
			</div>
		</form>
	</div>
	`
})
export class ResourceRecordListComponent
{
	formShown = false;

	readonly fieldErrorState = FieldErrorState;

	//private domain: string; // = 'softanews.ru';

	domainCdnSettings: {[domain: string]: DomainCdnSetting} = {};

	resourceRecords: ResourceRecord[] = [];

	private _wsrDnsInfo: WsrDnsInfo;

	@Input()
	set wsrDnsInfo(wsrDnsInfo: WsrDnsInfo) {
		this._wsrDnsInfo = wsrDnsInfo;
		let resourceRecords = [];
		let names = [];

		this.resourceRecordsConverter.wsr2canonical(wsrDnsInfo.dnsZone, wsrDnsInfo.hostList,
			resourceRecords, this.domainCdnSettings);

		for (let resourceRecord of resourceRecords){
			if (resourceRecord.name == wsrDnsInfo.domain){
				names.push('@');
			} else {
				names.push(resourceRecord.name.substring(0, resourceRecord.name.length - wsrDnsInfo.domain.length - 1));
			}
		}
		this.names = names;
		this.resourceRecords = resourceRecords;
		//console.log(this.resourceRecords);
		//console.log(this.domainCdnSettings);
	}

	get wsrDnsInfo(): WsrDnsInfo {
		return this._wsrDnsInfo;
	}

	undoManualInput(record: ResourceRecord, element: HTMLInputElement){
		element.value = record.getDisplayedValue();
	}

	/*
	private logNames(){
		console.log(this.names);
	}

	private logCdnSettings(){
		console.log(this.domainCdnSettings);
	}

	private logRR(){
		console.log(this.resourceRecords);
	}*/

	onChangeCdnSetting(value: DomainCdnType, domainCdnSetting: DomainCdnSetting){
		if (value == DomainCdnType.Region){
			const modalRef = this.modalService.open(RegionSelectorComponent);
			modalRef.result.then(
				(result: NodeRegion[]) => {
					if (result){
						domainCdnSetting.type = DomainCdnType.Region;
						domainCdnSetting.regions = result;
					} else {

					}
				},
				(result: string) => {
				}
			);
			//console.log(domainCdnSetting.regions);
			modalRef.componentInstance.value = domainCdnSetting.regions;
		} else if (value == DomainCdnType.Group){
			const modalRef = this.modalService.open(GroupSelectorComponent, {size: 'lg'});
			modalRef.result.then(
				(result: NodeGroup) => {
					if (result){
						domainCdnSetting.type = DomainCdnType.Group;
						domainCdnSetting.group = result;
					} else {

					}
				},
				(result: string) => {
				}
			);
			modalRef.componentInstance.group = domainCdnSetting.group;
		} else {
			domainCdnSetting.type = value;
		}
	}

	readonly ttlValues = [
		{value: 0, name: 'Auto'},
		{value: 120, name: '2 m.'},
		{value: 300, name: '5 m.'},
		{value: 600, name: '10 m.'},
		{value: 900, name: '15 m.'},
		{value: 1800, name: '30 m.'},
		{value: 3600, name: '1 h.'},
		{value: 7200, name: '2 h.'},
		{value: 18000, name: '5 h.'},
		{value: 43200, name: '12 h.'},
		{value: 86400, name: '1 d.'}
	];

	onTtlChanged(i, value: number){
		this.resourceRecords[i].ttl = value;
	}

	currentRecord;

	names: string[] = [];

	recordNameError: FieldErrorState;
	recordValueError: FieldErrorState;
	recordDisplayedValue: string = '';

	private readonly subdomainRegexp: RegExp = /^[a-z0-9_-]+(\.[a-z0-9_-]+)*$/i;

	constructor(
		private modalService: NgbModal,
		private resourceRecordsConverter: ResourceRecordsConverterService
	) {
		this.currentRecord = new ResourceRecordA();
		this.currentRecord.name = '@';

		this.recordNameError = FieldErrorState.None;
		this.recordValueError = FieldErrorState.Hidden;
	}

	deleteRecord(i: number){
		if (this.resourceRecords[i].type == 'A'){
			let domain = this.resourceRecords[i].name;
			if (this.getDomainARecordCount(domain) == 1){
				delete this.domainCdnSettings[domain];
			}
		}
		this.resourceRecords.splice(i, 1);
		this.names.splice(i, 1);

		this.assembleOutput();
	}

	private assembleOutput(){
		let dnsZone = {};
		let hostList = {};
		this.resourceRecordsConverter.canonical2wsr(this._wsrDnsInfo.domain, this.resourceRecords, this.domainCdnSettings, dnsZone, hostList);

		//console.log(JSON.stringify(dnsZone));
		//console.log(JSON.stringify(hostList));
		this._wsrDnsInfo.dnsZone = dnsZone;
		this._wsrDnsInfo.hostList = hostList;
	}

	private updateName(i): void {
		if (!this.validateName(this.names[i])){
			return;
		}
		let newDomain = this.names[i] == '@'
			? this._wsrDnsInfo.domain
			: this.names[i] + '.' + this._wsrDnsInfo.domain;

		if (this.resourceRecords[i].name == newDomain){
			return;
		}

		// удалить старое имя из cdn и добавить новое
		let oldDomain = this.resourceRecords[i].name;

		if (this.resourceRecords[i].type == 'A'){
			if (this.getDomainARecordCount(oldDomain) == 1){
				// запись о текущем домене - единственная
				if (this.getDomainARecordCount(newDomain) > 0){
					// для нового имени уже есть записи
					this.resourceRecords[i].name = newDomain;
					delete this.domainCdnSettings[oldDomain];
				} else {
					// для нового имени еще нет записей - берем эту же
					this.domainCdnSettings[newDomain] = this.domainCdnSettings[oldDomain];
					this.resourceRecords[i].name = newDomain;
					delete this.domainCdnSettings[oldDomain];
				}
			} else {
				if (this.getDomainARecordCount(newDomain) > 0){
					this.resourceRecords[i].name = newDomain;
				} else {
					this.domainCdnSettings[newDomain] = JSON.parse(JSON.stringify(this.domainCdnSettings[oldDomain])); // clonning
					this.resourceRecords[i].name = newDomain;
				}
			}
		} else {
			this.resourceRecords[i].name = newDomain;
		}
		this.assembleOutput();
	}

	private getDomainARecordCount(domain: string): number {
		let cnt = 0;
		for (let record of this.resourceRecords){
			if (record.name == domain && record.type == 'A'){
				cnt++;
			}
		}
		return cnt;
	}

	private validateName(name: string): boolean {
		return name == '@' || name == '*' || this.subdomainRegexp.test(name);
	}

	private editValue(record: ResourceRecord){
		const modalRef = this.modalService.open(ResourceRecordModalContentComponent);
		modalRef.result.then(
			(result: ResourceRecord) => {
				if (result){
					if (record === this.currentRecord){
						this.recordValueError = FieldErrorState.None;
						this.recordDisplayedValue = this.currentRecord.getDisplayedValue();
					} else {
						result.valid = true;
						this.assembleOutput();
					}
					record = result;
				}
			},
			(result: string) => {

			}
		);
		modalRef.componentInstance.record = record;
	}

	private changeRecordType(value){
		let ttl: number;
		let name: string;
		let currentExists: boolean = false;
		if (this.currentRecord){
			currentExists = true;
			ttl = this.currentRecord.ttl;
			name = this.currentRecord.name;
		}
		this.currentRecord = ResourceRecordsFactory.generate(value);
		if (currentExists){
			this.currentRecord.ttl = ttl;
			this.currentRecord.name = name;
		}
		this.recordValueError = FieldErrorState.Hidden;
		this.recordDisplayedValue = '';
	}

	onSubmit(){
		if (this.recordValueError == FieldErrorState.Hidden){
			this.recordValueError = FieldErrorState.Shown;
		}
		this.recordNameError = this.currentRecord.name && this.validateName(this.currentRecord.name)
			? FieldErrorState.None
			: FieldErrorState.Shown;

		if (this.recordNameError != FieldErrorState.None || this.recordValueError != FieldErrorState.None){
			return;
		}

		let name = this.currentRecord.name;

		if (this.currentRecord.name == '@'){
			this.currentRecord.name = this._wsrDnsInfo.domain;
		} else {
			this.currentRecord.name = this.currentRecord.name + '.' + this._wsrDnsInfo.domain;
		}
		if (this.currentRecord.type == 'A' && !this.domainCdnSettings.hasOwnProperty(this.currentRecord.name)){
			this.domainCdnSettings[this.currentRecord.name] = new DomainCdnSetting();
		}

		let inserted = false;
		for (let i = 0; i < this.resourceRecords.length; i++){
			if (resourceRecordSorter(this.currentRecord, this.resourceRecords[i]) == -1){
				this.names.splice(i, 0, name);
				this.resourceRecords.splice(i, 0, this.currentRecord);
				inserted = true;
				break;
			}
		}
		if (!inserted) {
			this.names.push(name);
			this.resourceRecords.push(this.currentRecord);
		}

		this.currentRecord = ResourceRecordsFactory.generate(this.currentRecord.type);
		this.currentRecord.name = name;


		this.recordValueError = FieldErrorState.None;
		this.recordNameError = FieldErrorState.None;

		this.recordDisplayedValue = '';

		this.assembleOutput();
	}
}