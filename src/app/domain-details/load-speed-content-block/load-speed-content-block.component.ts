import { Component, OnInit } from '@angular/core';
import {ContentBlockComponent} from "../content-block/content-block.component";
import {parameters} from "../../../parameters";

@Component({
  selector: 'app-load-speed-content-block',
  templateUrl: './load-speed-content-block.component.html',
  styleUrls: ['./load-speed-content-block.component.css']
})
export class LoadSpeedContentBlockComponent extends ContentBlockComponent implements OnInit {

  protected setDataUri(){
    this.data_uri = parameters.loadSpeedUri;
  }

}
