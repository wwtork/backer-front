import { ResourceRecord } from "./resource-record";

export class ResourceRecordNs extends ResourceRecord
{
	readonly type: string = 'NS';
	data: string = '';

	getDisplayedValue(): string {
		return this.data;
	}
}
