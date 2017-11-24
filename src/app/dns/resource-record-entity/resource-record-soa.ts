import { ResourceRecord } from "./resource-record";

export class ResourceRecordSoa extends ResourceRecord
{
	readonly type: string = 'SOA';
	mname: string = '';
	rname: string = '';
	serial: number = 0;
	refresh: number = 10800;
	retry: number = 1800;
	expire: number = 3600000;
	minimum: number = 3600;

	getDisplayedValue(): string {
		return `
			mname: ${ this.mname }, 
			rname: ${ this.rname }, 
			serial: ${ this.serial }, 
			refresh: ${ this.refresh }, 
			retry: ${ this.retry }, 
			expire: ${ this.expire }, 
			minimum: ${ this.minimum }
		`.replace(/[\t\r\n]/g, '');
	}
}
