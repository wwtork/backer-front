import { Component } from '@angular/core';

import { ResourceRecordComponent } from './resource-record.component';
import { FormBuilder, Validators } from "@angular/forms";
import { Validators as CustomValidators } from '../validators';

@Component({
	selector: 'rr-mx',
	styles: [`
		.down-button,
		.up-button {
			border: solid #c1c1c1;
			position: absolute;
			height: 100%;
			width: 40px;
			top: 0;
			border-width: 0 0 0 1px;
		}
		.down-button {
			right: 40px;
			background: transparent url('../../../assets/images/arrow_down.png') 50% 50% no-repeat;
		}
		.up-button {
			right: 0;
			background: transparent url('../../../assets/images/arrow_up.png') 50% 50% no-repeat;
		}
	`],
	template: `
	<div class="record-mx">
		<form [formGroup]="form">
			<div class="form-group" [class.has-error]="toBeHighlighted('exchange')">
				<label>Exchange</label>
				<input type="text" class="form-control" formControlName="exchange" #focus>
				<div class="error-description">
					<ng-container *ngIf="toBeFixed('exchange')">
						Value is required.
					</ng-container>
					<ng-container *ngIf="toBeFixed('exchange', 'domain')">
						Should be a valid domain name.
					</ng-container>
				</div>
			</div>
			<div class="form-group" [class.has-error]="toBeHighlighted('preference')">
				<label>Preference</label>
				<div style="position: relative">
					<input type="text" class="form-control" #preference formControlName="preference">
					<button class="up-button" (click)="incPreference()"></button>
					<button class="down-button" (click)="decPreference()"></button>
				</div>
				<div class="error-description">
					<ng-container *ngIf="toBeFixed('preference')">
						Value is required.
					</ng-container>
					<ng-container *ngIf="toBeFixed('preference', 'int')">
						Should be an integer value between 0 and 65535.
					</ng-container>
				</div>
			</div>
		</form>
	</div>
	`
})
export class ResourceRecordMxComponent extends ResourceRecordComponent
{
	static getFormFields(): {} {
		return {
			exchange: ['', [Validators.required, CustomValidators.domain(true)]],
			preference: ['', [Validators.required, CustomValidators.int(0, 65535)]]
		}
	};

	constructor(builder: FormBuilder) {
		super(builder);
	}

	incPreference(){
		this.form.patchValue({
			preference: parseInt(this.form.controls['preference'].value) + 1
		});
	}

	decPreference(){
		this.form.patchValue({
			preference: parseInt(this.form.controls['preference'].value) - 1
		});
	}
}
