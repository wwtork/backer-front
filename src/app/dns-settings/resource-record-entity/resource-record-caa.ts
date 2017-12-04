import { ResourceRecord } from "./resource-record";

export class ResourceRecordCaa extends ResourceRecord
{
	readonly type: string = 'CAA';
	flag: number = 0;
	tag: string = 'issue';
	value: string = '';

	getDisplayedValue(): string {
		return `${ this.flag } ${ this.tag } "${ this.value }"`;
	}
}
