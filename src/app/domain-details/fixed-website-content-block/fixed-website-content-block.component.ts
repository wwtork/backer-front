import { Component, OnInit } from '@angular/core';
import {parameters} from "../../../parameters";
import {ContentBlockComponent} from "../content-block/content-block.component";

@Component({
  selector: 'app-fixed-website-content-block',
  templateUrl: './fixed-website-content-block.component.html',
  styleUrls: ['./fixed-website-content-block.component.css']
})
export class FixedWebsiteContentBlockComponent extends ContentBlockComponent implements OnInit {

  protected setDataUri(){
    this.data_uri = parameters.fixedWebsiteUri;
  }

}
