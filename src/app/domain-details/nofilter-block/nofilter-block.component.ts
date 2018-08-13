import {Component, Input, OnInit} from '@angular/core';
import {BackendDataService} from "../../backend-data.service";

@Component({
  selector: 'app-nofilter-block',
  templateUrl: './nofilter-block.component.html',
  styleUrls: ['./nofilter-block.component.css']
})
export class NofilterBlockComponent implements OnInit {


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

}
