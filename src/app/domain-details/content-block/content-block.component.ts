import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Ng4LoadingSpinnerService} from "ng4-loading-spinner";
import {BackendDataService} from "../../backend-data.service";
import {FilterBlockComponent} from "../filter-block/filter-block.component";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";

@Component({
    selector: 'app-content-block',
    templateUrl: './content-block.component.html',
    styleUrls: ['./content-block.component.css']
})
export class ContentBlockComponent implements OnInit {

    protected data: object = {};
    protected data_uri: string;
    protected error: any;
    @Input() siteId: number;
    @Input() filterEvent:EventEmitter<any>;
    @Input() parent: FilterBlockComponent;

    public updateEvent: EventEmitter<any> = new EventEmitter();

    constructor(private modalService: NgbModal, protected spinnerService: Ng4LoadingSpinnerService, protected backendDataService: BackendDataService) {

    }

    protected updateContent(filter = null) {
        // this.spinnerService.show();
        this.backendDataService.getContentBlockData(this.data_uri.replace('{siteId}', this.siteId.toString()), filter).then((result) => {
            this.data = result;
            this.spinnerService.hide();
            this.updateEvent.emit(result);
        }, (err) => {
            this.spinnerService.hide();
            this.error = err;
            return false;
        });
        // this.spinnerService.hide();
    }

    protected setDataUri(){

    }

    // ngOnChanges() {
    //     this.setDataUri();
    //     this.filterEvent.subscribe(filter => this.updateContent(filter));
    //     // this.updateContent();
    // }

    ngOnInit() {
        this.setDataUri();
        this.filterEvent.subscribe(filter => this.updateContent(filter));
        // this.updateContent();
    }

    public processModalResult(result) {
    }

    public openModal(component, entity){
        let modalRef = this.modalService.open(component);
        modalRef.componentInstance.siteId = this.siteId;
        modalRef.componentInstance.entity = entity;
        modalRef.result.then(
            (result) => {
                this.processModalResult(result);
            },
            (result: string) => {

            }
        );
    }

}


