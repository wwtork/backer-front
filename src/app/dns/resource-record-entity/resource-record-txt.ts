import { ResourceRecord } from "./resource-record";

export class ResourceRecordTxt extends ResourceRecord
{
	readonly type: string = 'TXT';
	data: string = '';

	getDisplayedValue(): string {
		return this.data;
	}
}
