import { Component } from '@angular/core';

import { ResourceRecordComponent} from './resource-record.component';
import { FormBuilder, Validators } from "@angular/forms";
import { Validators as CustomValidators } from '../validators';

@Component({
	selector: 'rr-cname',
	template: `
	<div class="record-cname">
		<form [formGroup]="form">
			<div class="form-group" [class.has-error]="toBeHighlighted('data')">
				<label>Data</label>
				<input type="text" class="form-control" formControlName="data" #focus>
				<div class="error-description">
					<ng-container *ngIf="toBeFixed('data')">
						Value is required.
					</ng-container>
					<ng-container *ngIf="toBeFixed('data', 'domain')">
						Should be a valid domain name.
					</ng-container>
				</div>
			</div>
		</form>
	</div>
  `
})
export class ResourceRecordCnameComponent extends ResourceRecordComponent
{
	static getFormFields(): {} {
		return {
			data: ['', [Validators.required, CustomValidators.domain(true)]]
		}
	};

	constructor(builder: FormBuilder) {
		super(builder);
	}
}

