import { Component, Input, ViewChild, ComponentFactoryResolver} from '@angular/core';

import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FormHostDirective } from "../form-host.directive";
import { ResourceRecordComponent } from "../resource-record-component/resource-record.component";
import { ResourceRecord } from "../resource-record-entity/resource-record";
import { Factory as ResourceRecordComponentFactory } from "../resource-record-component/factory";

@Component({
	selector: 'rr-modal-content',
	styleUrls: ['./resource-record-modal-content.component.css'],
	templateUrl: './resource-record-modal-content.component.html'
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