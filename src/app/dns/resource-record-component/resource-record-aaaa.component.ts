import { Component } from '@angular/core';

import { ResourceRecordComponent} from './resource-record.component';
import { FormBuilder, Validators } from "@angular/forms";
import { Validators as CustomValidators } from '../validators';

@Component({
	selector: 'rr-aaaa',
	template: `
	<div class="record-aaaa">
		<form [formGroup]="form">
			<div class="form-group" [class.has-error]="toBeHighlighted('data')">
				<label>Data</label>
				<input type="text" class="form-control" formControlName="data" #focus>
				<div class="error-description">
					<ng-container *ngIf="toBeFixed('data')">
						Address is required.
					</ng-container>
					<ng-container *ngIf="toBeFixed('data', 'ipv6')">
						Should be a valid ipv6 address.
					</ng-container>
				</div>
			</div>
		</form>
	</div>
  `
})
export class ResourceRecordAaaaComponent extends ResourceRecordComponent
{
	static getFormFields(): {} {
		return {
			data: ['', [Validators.required, CustomValidators.ipv6()]]
		}
	};

	constructor(builder: FormBuilder) {
		super(builder);
	}
}

