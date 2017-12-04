import { Component } from '@angular/core';

import { ResourceRecordComponent} from './resource-record.component';
import { FormBuilder, Validators } from "@angular/forms";

@Component({
	selector: 'rr-txt',
	template: `
	<div class="record-txt">
		<form [formGroup]="form">
			<div class="form-group" [class.has-error]="toBeHighlighted('data')">
				<label>Data</label>
				<textarea class="form-control" formControlName="data" #focus></textarea>
				<div class="error-description">
					<ng-container *ngIf="toBeFixed('data')">
						Value is required.
					</ng-container>
				</div>
			</div>
		</form>
	</div>
  `
})
export class ResourceRecordTxtComponent extends ResourceRecordComponent
{
	static getFormFields(): {} {
		return {
			data: ['', [Validators.required]]
		}
	};

	constructor(builder: FormBuilder) {
		super(builder);
	}
}

