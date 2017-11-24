import { ResourceRecord } from "./resource-record";

export class ResourceRecordSrv extends ResourceRecord
{
	readonly type: string = 'SRV';
	service: string;
	proto: string = 'TCP';
	priority: number = 0;
	weight: number = 0;
	port: number = 5060;
	target: string;

	getDisplayedValue(): string {
		return `
			_${ this.service }._${ this.proto }.${ this.name} 
			priority: ${ this.priority }, 
			weight: ${ this.weight }, 
			port: ${ this.port }, 
			target: ${ this.target } 
		`.replace(/[\t\r\n]/g, '');
	}
}
