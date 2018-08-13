import {Component, Input, OnInit} from '@angular/core';
import {NofilterBlockComponent} from "../nofilter-block/nofilter-block.component";
import {BackendDataService} from "app/backend-data.service";

@Component({
    selector: 'app-backup-filter-block',
    templateUrl: './backup-filter-block.component.html',
    styleUrls: ['./backup-filter-block.component.css']
})
export class BackupFilterBlockComponent extends NofilterBlockComponent implements OnInit {

    public has_count_limit = true;

    constructor(protected backendDataService: BackendDataService){
        super(backendDataService);
        this.getLimits();
    }

    protected getLimits(){
        this.backendDataService.getStorageLimitInfo(this.siteId).then((result) => {
            this.cnt = result['count'];
            this.cnt_limit = result['count_limit']
        }, (err) => {
            return false;
        });
    }

}
