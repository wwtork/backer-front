import { ResourceRecord } from "./resource-record";

export class ResourceRecordA extends ResourceRecord
{
	readonly type: string = 'A';
	address: string = '';

	getDisplayedValue(): string {
		return this.address;
	}
}
