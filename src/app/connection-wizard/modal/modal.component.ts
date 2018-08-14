import {Component, ComponentFactoryResolver, Input, OnInit, ViewChild} from '@angular/core';
import {NgbActiveModal} from "@ng-bootstrap/ng-bootstrap";
import {GlobalDataService} from "../global-data.service";
import {ModalDirective} from "../modal.directive";
import {ModalContentComponent} from "../model/modal-content-component";
import {FtpErrorModalComponent} from "../ftp-error-modal/ftp-error-modal.component";
import {RequestTariffModalComponent} from "../request-tariff-modal/request-tariff-modal.component";
import {FreeTariffModalComponent} from "../free-tariff-modal/free-tariff-modal.component";
import {BuyTariffModalComponent} from "../buy-tariff-modal/buy-tariff-modal.component";

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

    private modals = {
        'ftp-error': new ModalContentComponent(FtpErrorModalComponent, 'ftp-error'),
        'default': new ModalContentComponent(FtpErrorModalComponent, 'ftp-error'),
        'request-tariff': new ModalContentComponent(RequestTariffModalComponent, 'request-tariff'),
        'free-tariff': new ModalContentComponent(FreeTariffModalComponent, 'free-tariff'),
        'buy-tariff': new ModalContentComponent(BuyTariffModalComponent, 'buy-tariff')
    };

    private componentRef;

    private modal: any;

    constructor(public activeModal: NgbActiveModal, private componentFactoryResolver: ComponentFactoryResolver) {
    }

    ngOnInit() {
        this.chooseModal(this.modal_name);
        this.loadModal(this.modal);
    }

    private getModal(modal: string = null): ModalContentComponent {
        return this.modals[modal == null ? 'default' : modal];
    }

    private chooseModal(modal: string) {
        let modalComponent = this.getModal(modal);
        this.modal = modalComponent.component;
    }

    private loadModal(component) {
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
