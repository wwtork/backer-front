import { ResourceRecord } from "./resource-record";

export class ResourceRecordAaaa extends ResourceRecord
{
	readonly type: string = 'AAAA';
	data: string = '';

	getDisplayedValue(): string {
		return this.data;
	}
}
