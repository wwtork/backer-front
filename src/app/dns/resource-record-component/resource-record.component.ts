import {OnInit, OnDestroy, AfterViewInit, ViewChild, ElementRef} from '@angular/core';
import {ResourceRecord} from "../resource-record-entity/resource-record";
import {FormGroup, FormBuilder} from "@angular/forms";

export abstract class ResourceRecordComponent implements OnInit, OnDestroy, AfterViewInit
{
	public form: FormGroup;
	private _record: ResourceRecord;

	@ViewChild('focus')
	private focusElement: ElementRef;

	static getFormFields(): {} {
		return {

		};
	};

	constructor(builder: FormBuilder) {
		this.form = builder.group((this.constructor as typeof ResourceRecordComponent).getFormFields());
	}

	set record(record: ResourceRecord) {
		this._record = record;
		this.resetForm();
	}

	get record(): ResourceRecord {
		return this._record;
	}

	private resetForm(): void {
		this.form.reset(this.prepareFormModel());
	}

	protected prepareFormModel(): any {
		let result = {};
		let record = this.record;
		for (let p in this.form.controls){
			if (this.form.controls.hasOwnProperty(p)){
				result[p] = record[p];
			}
		}
		return result;
	}

	protected processFormModel(): void {
		let formModel = this.form.value;
		let record = this.record;

		for (let p in this.form.controls){
			if (this.form.controls.hasOwnProperty(p)){
				record[p] = formModel[p];
			}
		}
	}

	toBeHighlighted(fieldName: string): boolean {
		return this.form.controls[fieldName].invalid && this.form.controls[fieldName].dirty;
	}

	toBeFixed(fieldName: string, validatorName: string = 'required'): boolean {
		if (!this.form.controls[fieldName].invalid){
			return false;
		}
		if (this.form.controls[fieldName].errors['required']){
			return validatorName == 'required';
		}
		return !!this.form.controls[fieldName].errors[validatorName];
	}

	submit() {
		if (!this.form.valid){
			return false;
		}

		this.processFormModel();

		return true;
	}

	ngAfterViewInit() {
		if (this.focusElement){
			this.focusElement.nativeElement.focus();
		}
	}

	ngOnInit() {
		//setTimeout(() => console.log(this.constructor.name), 0);
	}
	ngOnDestroy() {
		//setTimeout(() => console.log(this.constructor.name), 0);
	}
}