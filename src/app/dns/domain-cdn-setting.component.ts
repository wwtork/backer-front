import { Component, Input, EventEmitter, Output } from "@angular/core";
import { DomainCdnSetting, DomainCdnType } from "./domain-cdn-setting";
import { PopoverSelectComponent } from "./popover-select.component";

@Component({
	selector: 'wsr-domain-cdn-setting',
	styleUrls: ['./domain-cdn-setting.component.css'],
	template: `
		<button
			type="button"
			class="popover-button"
			[class.cdn-off]="value.type == 0"
			[class.cdn-on]="value.type != 0"
			placement="left"
			[ngbPopover]="popoverContent"
			#popover="ngbPopover"
			triggers="manual"
			(click)="onToggle()"
			(blur)="onBlur()"
		>
			<div class="icon"></div>
		</button>
		<button *ngIf="value.type == domainCdnType.Region"
			class="detail-button"
			(click)="select(domainCdnType.Region)"
			[ngbPopover]="regionsOverviewPopoverContent"
			triggers="mouseenter:mouseleave"
			placement="bottom"
		>
			Regions <div class="regions-count">{{ value.regions.length }}</div>
		</button>
		<button *ngIf="value.type == domainCdnType.Group"
			class="detail-button"
			(click)="select(domainCdnType.Group)"
		>
			<ng-container *ngIf="value.group.whoisCountry">
			Group <div class="group-name" title="{{ value.group.whoisCountry }} /  {{ value.group.whoisRegion }}">{{ value.group.whoisCountry }} /  {{ value.group.whoisRegion }}</div>
			</ng-container>
		</button>
		
		<ng-template #popoverContent>
			<div (mouseenter)="mouseOn()" (mouseleave)="mouseOff()">
				<div *ngFor="let item of items" (click)="select(item.value)">
					<div class="toggle-button" [class.selected]="item.value == value.type" [class.cdn-off]="item.value == 0" [class.cdn-on]="item.value != 0">
						<div class="icon"></div>{{ item.name }}
					</div>
				</div>
			</div>
		</ng-template>
		
		<ng-template #regionsOverviewPopoverContent>
			<ul class="regions-overview">
				<li *ngFor="let region of value.regions">
					{{ region.whoisRegion }}, {{ region.whoisCountry }}
				</li>
			</ul>
		</ng-template>
	`
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