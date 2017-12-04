import { Component } from '@angular/core';

import { ResourceRecordComponent} from './resource-record.component';
import { FormBuilder } from "@angular/forms";

@Component({
	selector: 'rr-caa',
	template: `
	<div class="record-a">
		<form [formGroup]="form">
			<div class="form-group" [class.has-error]="toBeHighlighted('flag')">
				<label>Flag</label>
				<wsr-reactive-select [options]="[0, 128]" [control]="form.controls['flag']" [form]="form" [focus]="true"></wsr-reactive-select>
			</div>
			<div class="form-group" [class.has-error]="toBeHighlighted('tag')">
				<label>Tag</label>
				<wsr-reactive-select [options]="['issue', 'issuewild', 'iodef']" [control]="form.controls['tag']" [form]="form"></wsr-reactive-select>
			</div>
			<div class="form-group" [class.has-error]="toBeHighlighted('value')">
				<label>Value</label>
				<input type="text" class="form-control" formControlName="value">
			</div>
		</form>
	</div>
  `
})
export class ResourceRecordCaaComponent extends ResourceRecordComponent
{
	static getFormFields(): {} {
		return {
			flag:  ['', []],
			tag:   ['', []],
			value: ['', []]
		}
	};

	constructor(builder: FormBuilder) {
		super(builder);
	}
}

