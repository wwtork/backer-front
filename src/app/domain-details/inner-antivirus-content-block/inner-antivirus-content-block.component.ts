import { Component, OnInit } from '@angular/core';
import {ContentBlockComponent} from "../content-block/content-block.component";
import {parameters} from "../../../parameters";

@Component({
  selector: 'app-inner-antivirus-content-block',
  templateUrl: './inner-antivirus-content-block.component.html',
  styleUrls: ['./inner-antivirus-content-block.component.css']
})
export class InnerAntivirusContentBlockComponent extends ContentBlockComponent implements OnInit {

  protected setDataUri(){
    this.data_uri = parameters.innerAntivirusUri;
  }

}
