import { Component, OnInit } from '@angular/core';
import {FilterBlockComponent} from "../filter-block/filter-block.component";
import {BackendDataService} from "app/backend-data.service";

@Component({
  selector: 'app-speed-filter-block',
  templateUrl: './speed-filter-block.component.html',
  styleUrls: ['./speed-filter-block.component.css']
})
export class SpeedFilterBlockComponent extends FilterBlockComponent implements OnInit {

    public has_count_limit = true;

    constructor(protected backendDataService: BackendDataService){
        super(backendDataService);
        this.getLimits();
    }

    protected getLimits(){
        this.backendDataService.getTrafficLimitInfo(this.siteId).then((result) => {
            this.cnt = result['count'];
            this.cnt_limit = result['count_limit']
        }, (err) => {
            return false;
        });
    }


}
