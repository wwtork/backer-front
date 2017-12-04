import {ResourceRecord} from "./resource-record";
import {ResourceRecordA} from "./resource-record-a";
import {ResourceRecordSoa} from "./resource-record-soa";
import {ResourceRecordMx} from "./resource-record-mx";
import {ResourceRecordCaa} from "./resource-record-caa";
import {ResourceRecordSrv} from "./resource-record-srv";
import {ResourceRecordTxt} from "./resource-record-txt";
import { ResourceRecordCname } from "./resource-record-cname";
import { ResourceRecordNs } from "./resource-record-ns";
import { ResourceRecordAaaa } from "./resource-record-aaaa";

export class Factory {
	static generate(type: string): ResourceRecord {
		switch (type){
			case 'A':
				return new ResourceRecordA();
			case 'MX':
				return new ResourceRecordMx();
			case 'NS':
				return new ResourceRecordNs();
			case 'CNAME':
				return new ResourceRecordCname();
			case 'TXT':
				return new ResourceRecordTxt();
			case 'AAAA':
				return new ResourceRecordAaaa();
			case 'SOA':
				return new ResourceRecordSoa();
			case 'SRV':
				return new ResourceRecordSrv();
			case 'CAA':
				return new ResourceRecordCaa();
			default:
				return undefined;
		}
	}
}
