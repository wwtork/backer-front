import { Component } from '@angular/core';

import { ResourceRecordComponent } from './resource-record.component';
import { FormBuilder, Validators} from "@angular/forms";
import { Validators as CustomValidators } from '../validators';

@Component({
	selector: 'rr-srv',
	template: `
	<div class="record-srv">
		<form [formGroup]="form">
			<div class="form-group" [class.has-error]="toBeHighlighted('service')">
				<label>Service</label>
				<input type="text" class="form-control" formControlName="service" #focus>
				<div class="error-description">
					<ng-container *ngIf="toBeFixed('service')">
						Value is required.
					</ng-container>
					<ng-container *ngIf="toBeFixed('service', 'regexp')">
						Should be a valid service name.
					</ng-container>
				</div>
			</div>
			<div class="form-group" [class.has-error]="toBeHighlighted('proto')">
				<label>Proto</label>
				<input type="text" class="form-control" formControlName="proto">
				<div class="error-description">
					<ng-container *ngIf="toBeFixed('proto')">
						Value is required.
					</ng-container>
				</div>
			</div>
			<div class="form-group" [class.has-error]="toBeHighlighted('priority')">
				<label>Priority</label>
				<input type="text" class="form-control" formControlName="priority">
				<div class="error-description">
					<ng-container *ngIf="toBeFixed('priority')">
						Value is required.
					</ng-container>
					<ng-container *ngIf="toBeFixed('priority', 'int')">
						Should be an integer value between 0 and 65535.
					</ng-container>
				</div>
			</div>
			<div class="form-group" [class.has-error]="toBeHighlighted('weight')">
				<label>Weight</label>
				<input type="text" class="form-control" formControlName="weight">
				<div class="error-description">
					<ng-container *ngIf="toBeFixed('weight')">
						Value is required.
					</ng-container>
					<ng-container *ngIf="toBeFixed('weight', 'int')">
						Should be an integer value between 0 and 65535.
					</ng-container>
				</div>
			</div>
			<div class="form-group" [class.has-error]="toBeHighlighted('port')">
				<label>Port</label>
				<input type="text" class="form-control" formControlName="port">
				<div class="error-description">
					<ng-container *ngIf="toBeFixed('port')">
						Value is required.
					</ng-container>
					<ng-container *ngIf="toBeFixed('port', 'int')">
						Should be an integer value between 0 and 65535.
					</ng-container>
				</div>
			</div>
			<div class="form-group" [class.has-error]="toBeHighlighted('target')">
				<label>Target</label>
				<input type="text" class="form-control" formControlName="target">
				<div class="error-description">
					<ng-container *ngIf="toBeFixed('target')">
						Value is required.
					</ng-container>
					<ng-container *ngIf="toBeFixed('target', 'domain')">
						Should be a valid domain name.
					</ng-container>
				</div>
			</div>
		</form>
	</div>
	`
})
export class ResourceRecordSrvComponent extends ResourceRecordComponent
{
	static getFormFields(): {} {
		return {
			service:  ['', [Validators.required, CustomValidators.regexp(/^[a-z0-9_-]+$/i)]],
			proto:    ['', [Validators.required]],
			priority: ['', [Validators.required, CustomValidators.int(0, 65535)]],
			weight:   ['', [Validators.required, CustomValidators.int(0, 65535)]],
			port:     ['', [Validators.required, CustomValidators.int(0, 65535)]],
			target:   ['', [Validators.required, CustomValidators.domain(true)]]
		}
	};

	constructor(builder: FormBuilder) {
		super(builder);
	}
}