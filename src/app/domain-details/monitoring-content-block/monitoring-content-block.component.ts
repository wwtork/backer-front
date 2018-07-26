import { Component, OnInit } from '@angular/core';
import {parameters} from "../../../parameters";
import {ContentBlockComponent} from "../content-block/content-block.component";

@Component({
  selector: 'app-monitoring-content-block',
  templateUrl: './monitoring-content-block.component.html',
  styleUrls: ['./monitoring-content-block.component.css']
})
export class MonitoringContentBlockComponent extends ContentBlockComponent implements OnInit {

  protected setDataUri(){
    this.data_uri = parameters.monitoringUri;
  }

}
