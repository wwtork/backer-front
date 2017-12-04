import { Component, Input, ViewChild, ElementRef } from "@angular/core";
import { FormControl, FormGroup } from "@angular/forms";
import { SelectComponent } from "./select.component";

@Component({
	selector: 'wsr-reactive-select',
	styleUrls: ['./select.component.css'],
	templateUrl: './reactive-select.component.html'
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