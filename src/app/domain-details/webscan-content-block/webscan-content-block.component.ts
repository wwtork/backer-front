import { Component, OnInit } from '@angular/core';
import {ContentBlockComponent} from "../content-block/content-block.component";
import {parameters} from "../../../parameters";

@Component({
  selector: 'app-webscan-content-block',
  templateUrl: './webscan-content-block.component.html',
  styleUrls: ['./webscan-content-block.component.css']
})
export class WebscanContentBlockComponent extends ContentBlockComponent implements OnInit {

  protected setDataUri(){
    this.data_uri = parameters.webscanUri;
  }

}
