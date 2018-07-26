import { Component, OnInit } from '@angular/core';
import {ContentBlockComponent} from "../content-block/content-block.component";
import {parameters} from "../../../parameters";

@Component({
  selector: 'app-changes-control-content-block',
  templateUrl: './changes-control-content-block.component.html',
  styleUrls: ['./changes-control-content-block.component.css']
})
export class ChangesControlContentBlockComponent extends ContentBlockComponent implements OnInit {

  protected setDataUri(){
    this.data_uri = parameters.changesControlUri;
  }

}
