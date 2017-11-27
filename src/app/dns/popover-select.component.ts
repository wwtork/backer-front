import {Component, Input, ViewChild, Output, EventEmitter} from "@angular/core";
import {NgbPopover} from "@ng-bootstrap/ng-bootstrap";

@Component({
	selector: 'wsr-popover-select',
	template: `
	<button class="popover-button"
	    [ngbPopover]="popoverContent"
	    #popover="ngbPopover"
	    triggers="manual"
	    placement="bottom"
	    (click)="onToggle()"
	    (blur)="onBlur()">
	    {{ getValueName() }}
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
export class PopoverSelectComponent {
	@Input()
	value: any;

	@Input()
	valueList = [];

	@Output()
	onVoted = new EventEmitter<number>();

	private mouseIsHere: boolean = false;

	@ViewChild('popover')
	popover: NgbPopover;

	select(value: any){
		this.value = value;
		this.popover.close();
		this.onVoted.emit(value);
	}

	onToggle() {
		if (this.popover.isOpen()) {
			this.popover.close();
		} else {
			this.popover.open();
		}
	}

	private mouseOn() {
		this.mouseIsHere = true;
	}
	private mouseOff() {
		this.mouseIsHere = false;
	}

	onBlur(){
		if (!this.mouseIsHere && this.popover.isOpen()){
			this.popover.close();
		}
	}

	getValueName(): string {
		let valueItem = this.valueList.find((element) => {return element.value == this.value});
		if (valueItem){
			return valueItem.name;
		}
		return this.value + '';
	}
}