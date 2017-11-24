import { Component } from '@angular/core';

import { ResourceRecordComponent} from './resource-record.component';
import { FormBuilder, Validators } from "@angular/forms";
import { Validators as CustomValidators } from '../validators';

@Component({
	selector: 'rr-a',
	template: `
	<div class="record-a">
		<form [formGroup]="form">
			<div class="form-group" [class.has-error]="toBeHighlighted('address')">
				<label>Server</label>
				<input type="text" class="form-control" formControlName="address" #focus>
				<div class="error-description">
					<ng-container *ngIf="toBeFixed('address')">
						Address is required.
					</ng-container>
					<ng-container *ngIf="toBeFixed('address', 'ipv4')">
						Should be a valid ipv4 address.
					</ng-container>
				</div>
			</div>
		</form>
	</div>
  `
})
export class ResourceRecordAComponent extends ResourceRecordComponent
{
	static getFormFields(): {} {
		return {
			address: ['', [Validators.required, CustomValidators.ipv4()]]
		}
	};

	constructor(builder: FormBuilder) {
		super(builder);
	}
}

