import { Component, OnInit } from '@angular/core';
import {parameters} from "../../../parameters";
import {ContentBlockComponent} from "../content-block/content-block.component";

@Component({
  selector: 'app-blocked-requests-content-block',
  templateUrl: './blocked-requests-content-block.component.html',
  styleUrls: ['./blocked-requests-content-block.component.css']
})
export class BlockedRequestsContentBlockComponent extends ContentBlockComponent implements OnInit {

  protected setDataUri(){
    this.data_uri = parameters.blockedRequestsUri;
  }

}
