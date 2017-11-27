import { Component } from '@angular/core';

import { ResourceRecordComponent } from './resource-record.component';
import {FormBuilder, Validators} from "@angular/forms";
import { Validators as CustomValidators } from '../validators';

@Component({
	selector: 'rr-soa',
	template: `
	<div class="record-soa">
		<form [formGroup]="form">
			<div class="form-group" [class.has-error]="toBeHighlighted('mname')">
				<label>Mname</label>
				<input type="text" class="form-control" formControlName="mname">
				<div class="error-description">
					<ng-container *ngIf="toBeFixed('mname')">
						Value is required.
					</ng-container>
					<ng-container *ngIf="toBeFixed('mname', 'domain')">
						Should be a valid domain.
					</ng-container>
				</div>
			</div>
			<div class="form-group" [class.has-error]="toBeHighlighted('rname')">
				<label>Rname</label>
				<input type="text" class="form-control" formControlName="rname">
				<div class="error-description">
					<ng-container *ngIf="toBeFixed('rname')">
						Value is required.
					</ng-container>
					<ng-container *ngIf="toBeFixed('rname', 'domain')">
						Should be a valid domain.
					</ng-container>
				</div>
			</div>
			<div class="form-group" [class.has-error]="toBeHighlighted('serial')">
				<label>Serial</label>
				<input type="text" class="form-control" formControlName="serial">
				<div class="error-description">
					<ng-container *ngIf="toBeFixed('serial')">
						Value is required.
					</ng-container>
					<ng-container *ngIf="toBeFixed('serial', 'int')">
						Should be an integer.
					</ng-container>
				</div>
			</div>
			<div class="form-group" [class.has-error]="toBeHighlighted('refresh')">
				<label>Refresh</label>
				<input type="text" class="form-control" formControlName="refresh">
				<div class="error-description">
					<ng-container *ngIf="toBeFixed('refresh')">
						Value is required.
					</ng-container>
					<ng-container *ngIf="toBeFixed('refresh', 'int')">
						Should be an integer.
					</ng-container>
				</div>
			</div>
			<div class="form-group" [class.has-error]="toBeHighlighted('retry')">
				<label>Retry</label>
				<input type="text" class="form-control" formControlName="retry">
				<div class="error-description">
					<ng-container *ngIf="toBeFixed('retry')">
						Value is required.
					</ng-container>
					<ng-container *ngIf="toBeFixed('retry', 'int')">
						Should be an integer.
					</ng-container>
				</div>
			</div>
			<div class="form-group" [class.has-error]="toBeHighlighted('expire')">
				<label>Expire</label>
				<input type="text" class="form-control" formControlName="expire">
				<div class="error-description">
					<ng-container *ngIf="toBeFixed('expire')">
						Value is required.
					</ng-container>
					<ng-container *ngIf="toBeFixed('expire', 'int')">
						Should be an integer.
					</ng-container>
				</div>
			</div>
			<div class="form-group" [class.has-error]="toBeHighlighted('minimum')">
				<label>Minimum</label>
				<input type="text" class="form-control" formControlName="minimum">
				<div class="error-description">
					<ng-container *ngIf="toBeFixed('minimum')">
						Value is required.
					</ng-container>
					<ng-container *ngIf="toBeFixed('minimum', 'int')">
						Should be an integer.
					</ng-container>
				</div>
			</div>
		</form>
	</div>
  `
})
export class ResourceRecordSoaComponent extends ResourceRecordComponent
{
	static getFormFields(): {} {
		return {
			mname:   ['', [Validators.required, CustomValidators.domain(true)]],
			rname:   ['', [Validators.required, CustomValidators.domain(true)]],
			serial:  ['', [Validators.required, CustomValidators.int(0, 0xFFFFFFFF)]],
			refresh: ['', [Validators.required, CustomValidators.int(0, 0x7FFFFFFF)]],
			retry:   ['', [Validators.required, CustomValidators.int(0, 0x7FFFFFFF)]],
			expire:  ['', [Validators.required, CustomValidators.int(0, 0x7FFFFFFF)]],
			minimum: ['', [Validators.required, CustomValidators.int(0, 0xFFFFFFFF)]]
		}
	};

	constructor(builder: FormBuilder) {
		super(builder);
	}
}