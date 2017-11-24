import { ResourceRecord } from "./resource-record";

export class ResourceRecordCname extends ResourceRecord
{
	readonly type: string = 'CNAME';
	data: string = '';

	getDisplayedValue(): string {
		return this.data;
	}
}
