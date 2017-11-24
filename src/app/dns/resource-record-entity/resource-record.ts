export class ResourceRecord
{
	valid: boolean = true;
	ttl: number = 0;
	name: string;
	readonly type: string;

	public getDisplayedValue(): string {
		return '';
	}
}