import { Component, Input, OnChanges } from "@angular/core";
import { PopoverSelectComponent } from "./popover-select.component";

@Component({
	selector: 'wsr-popover-select-ttl',
	styles: [`
		.popover-button {
			border: none;
			background: none;
			padding: 0;
			cursor: pointer;
			text-align: left;
			color: #4b4b4b;
		}
		.popover-button:focus,
		.popover-button:active {
			outline: none;
		}
		.item {
			margin: 3px 10px;
			cursor: pointer;
		}
	`],
	template: `
	<button class="popover-button"
	    [ngbPopover]="popoverContent"
	    #popover="ngbPopover"
	    triggers="manual"
	    placement="bottom"
	    (click)="onToggle()"
	    (blur)="onBlur()">
	    {{ valueToBeDisplayed }}
	</button>
	<ng-template #popoverContent>
		<div (mouseenter)="mouseOn()" (mouseleave)="mouseOff()">
			<div *ngFor="let valueItem of valueList" class="item" [class.selected]="valueItem.value == value" (click)="select(valueItem.value)">
				{{ valueItem.name }}
			</div>
		</div>
	</ng-template>
	`
})
export class PopoverSelectTtlComponent extends PopoverSelectComponent implements OnChanges
{
	valueToBeDisplayed: string;

	select(value){
		super.select(value);
		this.valueToBeDisplayed = this.getValueName();
	}

	getValueName(): string {
		let valueItem = this.valueList.find((element) => {return element.value == this.value});
		if (valueItem !== undefined){
			return valueItem.name;
		}
		return PopoverSelectTtlComponent.getDurationLabel(this.value);
	}

	private static getDurationLabel(value: number): string {
		let res = [];
		let days = Math.floor(value / 86400);
		if (days > 0){
			res.push(days + ' d.');
			value = value - days * 86400;
		}
		let hours = Math.floor(value / 3600);
		if (hours > 0){
			res.push(hours + ' h.');
			value = value - hours * 3600;
		}

		let minutes = Math.floor(value / 60);
		if (minutes > 0){
			res.push(minutes + ' min.');
			value = value - minutes * 60;
		}
		if (value > 0){
			res.push(value + ' s.');
		}

		return res.join(' ');
	}

	ngOnChanges(){
		this.valueToBeDisplayed = this.getValueName();
	}
}