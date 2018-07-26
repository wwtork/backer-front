import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Ng4LoadingSpinnerService} from "ng4-loading-spinner";
import {BackendDataService} from "../../backend-data.service";
import {FilterBlockComponent} from "../filter-block/filter-block.component";

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

    constructor(protected spinnerService: Ng4LoadingSpinnerService, protected backendDataService: BackendDataService) {

    }

    protected updateContent(filter = null) {
        // this.spinnerService.show();
        this.backendDataService.getContentBlockData(this.data_uri.replace('{siteId}', this.siteId.toString()), filter).then((result) => {
            this.data = result;
            this.spinnerService.hide();
            if(!result['status'])
                this.parent.has_content = false;
            else
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

    ngOnChanges() {
        this.filterEvent.subscribe(filter => this.updateContent(filter));
        this.setDataUri();
        this.updateContent();
    }

    ngOnInit() {
        this.filterEvent.subscribe(filter => this.updateContent(filter));
        this.setDataUri();
        this.updateContent();
    }

}


