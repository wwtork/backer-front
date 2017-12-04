import { Component, Input, EventEmitter, Output } from "@angular/core";
import { DomainCdnSetting, DomainCdnType } from "../domain-cdn-setting";
import { PopoverSelectComponent } from "../select/popover-select.component";

@Component({
	selector: 'wsr-domain-cdn-setting',
	styleUrls: ['./domain-cdn-setting.component.css'],
	templateUrl: './domain-cdn-setting.component.html',
})
export class DomainCdnSettingComponent extends PopoverSelectComponent
{
	@Input()
	value: DomainCdnSetting;

	@Output()
	onVoted = new EventEmitter<DomainCdnType>();

	domainCdnType = DomainCdnType;

	readonly items = [
		{value: DomainCdnType.None,   name: 'No CDN'},
		{value: DomainCdnType.Region, name: 'Regions'},
		{value: DomainCdnType.Group,  name: 'Group'},
		{value: DomainCdnType.Auto,   name: 'Auto'}
	];

	select(value: DomainCdnType){
		this.popover.close();
		this.onVoted.emit(value);
	}
}