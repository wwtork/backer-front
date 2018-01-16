import {Component, ComponentFactoryResolver, Input, OnInit, ViewChild} from '@angular/core';
import {NgbActiveModal} from "@ng-bootstrap/ng-bootstrap";
import {GlobalDataService} from "../global-data.service";
import {ModalDirective} from "../modal.directive";

@Component({
    selector: 'app-modal',
    templateUrl: './modal.component.html',
    styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

    @Input() settings;
    @Input() modal_name;
    @Input() data;
    @ViewChild(ModalDirective) appModal: ModalDirective;

    private componentRef;

    private modal: any;

    constructor(public activeModal: NgbActiveModal, private globalData: GlobalDataService, private componentFactoryResolver: ComponentFactoryResolver) {
    }

    ngOnInit() {
        this.chooseModal(this.modal_name);
        this.loadModal(this.modal);
    }

    chooseModal(modal: string) {
        let modalComponent = this.globalData.getModal(modal);
        this.modal = modalComponent.component;
    }

    loadModal(component) {
        let componentFactory = this.componentFactoryResolver.resolveComponentFactory(component);
        let viewContainerRef = this.appModal.viewContainerRef;
        viewContainerRef.clear();
        this.componentRef = viewContainerRef.createComponent(componentFactory);
        this.componentRef.instance.settings = this.settings;
        this.componentRef.instance.activeModal = this.activeModal;
        this.componentRef.instance.data = this.data;
        this.componentRef.instance.parentComponent = this;
        this.componentRef.changeDetectorRef.detectChanges();
    }

}
