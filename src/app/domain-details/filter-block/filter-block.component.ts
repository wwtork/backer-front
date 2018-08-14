import {Component, OnInit, EventEmitter, Input} from '@angular/core';
import {Filter} from "../filter";
import {BackendDataService} from "../../backend-data.service";

@Component({
    selector: 'app-filter-block',
    templateUrl: './filter-block.component.html',
    styleUrls: ['./filter-block.component.css']
})
export class FilterBlockComponent implements OnInit {


    @Input() siteId: number;
    public has_content: boolean = true;
    public cnt_limit;
    public cnt;
    public has_count_limit = false;

    constructor(protected backendDataService: BackendDataService){
        if(this.has_count_limit){
            this.getLimits();
        }
    }

    protected getLimits(){};

    ngOnInit() {

    }

    public filterEvent: EventEmitter<any> = new EventEmitter();

    protected submitFilter(filter: Filter = null) {
        this.filterEvent.emit(filter);
    }

}
