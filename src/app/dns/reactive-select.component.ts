import { Component, Input, ViewChild, ElementRef } from "@angular/core";
import { FormControl, FormGroup } from "@angular/forms";
import { SelectComponent } from "./select.component";

@Component({
	selector: 'wsr-reactive-select',
	styleUrls: ['./select.component.css'],
	template: `
		<div [formGroup]="form">
		<select class="form-control" (change)="onChange.emit($event.currentTarget.value)" [formControl]="control" #ownControl>
			<option *ngFor="let option of options" value="{{ option.value }}">{{ option.name }}</option>
		</select>
		<div class="select-button"></div>
		</div>
	`
})
export class ReactiveSelectComponent extends SelectComponent
{
	@ViewChild('ownControl')
	private ownControl: ElementRef;

	@Input()
	focus: boolean = false;

	@Input()
	control: FormControl;

	@Input()
	form: FormGroup;

	ngAfterViewInit() {
		if (this.focus){
			this.ownControl.nativeElement.focus();
		}
	}
}