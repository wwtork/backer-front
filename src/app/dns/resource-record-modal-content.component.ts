import { Component, Input, ViewChild, ComponentFactoryResolver} from '@angular/core';

import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FormHostDirective } from "./form-host.directive";
import { ResourceRecordComponent } from "./resource-record-component/resource-record.component";
import { ResourceRecord } from "./resource-record-entity/resource-record";
import { Factory as ResourceRecordComponentFactory } from "./resource-record-component/factory";

@Component({
	selector: 'rr-modal-content',
	styles: [`
		:host /deep/ .has-error .form-control {
			border-color: #e33618;
		}
		:host /deep/ .error-description {
			text-align: right;
			color: #e33618;
			display: none;
		}
		:host /deep/ .has-error .error-description {
			display: block;
		}
		:host /deep/ .form-group label {
			font-weight: bold;
			font-size: smaller;
		}
		.modal-footer button {
			display: block;
			width: 49%;
		}
		.modal-footer button + button {
			margin-left: 2%;
		}
	`],
	template: `
	<div class="modal-header">
		<h4 class="modal-title">{{ record.type }}-record edition</h4>
		<button type="button" class="close" aria-label="Close" (click)="activeModal.dismiss()">
			<span aria-hidden="true">&times;</span>
		</button>
	</div>
	<div class="modal-body" >
		<ng-template rr-form-host></ng-template>
	</div>
	<div class="modal-footer">
		<button type="button" class="btn btn-primary" (click)="component && component.submit() && activeModal.close(record)" [disabled]="!component.form.valid">Save</button>
		<button type="button" class="btn btn-default" (click)="activeModal.close(null)">Close</button>
	</div>
  `
})
export class ResourceRecordModalContentComponent
{
	@ViewChild(FormHostDirective)
	formHost: FormHostDirective;
	component: ResourceRecordComponent;

	@Input()
	set record(record: ResourceRecord) {
		let recordType = record.type;
		this.component = this.loadComponent(recordType);
		if (this.component) {
			this.component.record = record;
		}
	}
	get record(): ResourceRecord {
		return this.component ? this.component.record : undefined;
	}

	constructor(
		private componentFactoryResolver: ComponentFactoryResolver,
		public activeModal: NgbActiveModal
	) {}

	private loadComponent(recordType: string) {
		let componentClass = ResourceRecordComponentFactory.generate(recordType);

		let viewContainerRef = this.formHost.viewContainerRef;
		viewContainerRef.clear();

		if (!componentClass){
			return undefined;
		}

		let componentFactory = this.componentFactoryResolver.resolveComponentFactory(componentClass);
		let componentRef = viewContainerRef.createComponent(componentFactory);
		return <ResourceRecordComponent>componentRef.instance;
	}
}