import { Component, OnInit } from '@angular/core';
import {parameters} from "../../../parameters";
import {ContentBlockComponent} from "../content-block/content-block.component";

@Component({
  selector: 'app-hosting-errors-content-block',
  templateUrl: './hosting-errors-content-block.component.html',
  styleUrls: ['./hosting-errors-content-block.component.css']
})
export class HostingErrorsContentBlockComponent extends ContentBlockComponent implements OnInit {

  protected setDataUri(){
    this.data_uri = parameters.hostingErrorsUri;
  }

}
