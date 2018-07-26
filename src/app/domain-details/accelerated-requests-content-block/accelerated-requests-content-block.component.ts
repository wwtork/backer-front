import { Component, OnInit } from '@angular/core';
import {ContentBlockComponent} from "../content-block/content-block.component";
import {parameters} from "../../../parameters";

@Component({
  selector: 'app-accelerated-requests-content-block',
  templateUrl: './accelerated-requests-content-block.component.html',
  styleUrls: ['./accelerated-requests-content-block.component.css']
})
export class AcceleratedRequestsContentBlockComponent extends ContentBlockComponent implements OnInit {

  protected setDataUri(){
    this.data_uri = parameters.acceleratedRequestsUri;
  }

}
