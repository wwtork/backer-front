import { Component, OnChanges } from "@angular/core";
import { PopoverSelectComponent } from "./popover-select.component";

@Component({
	selector: 'wsr-popover-select-ttl',
	styleUrls: ['./popover-select-ttl.component.css'],
	templateUrl: './popover-select-ttl.component.html'
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