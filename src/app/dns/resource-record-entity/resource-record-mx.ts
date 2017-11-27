import { ResourceRecord } from "./resource-record";

export class ResourceRecordMx extends ResourceRecord
{
	readonly type: string = 'MX';
	exchange: string = '';
	preference: number = 10;

	getDisplayedValue(): string {
		return this.preference + ' ' + this.exchange;
	}
}
