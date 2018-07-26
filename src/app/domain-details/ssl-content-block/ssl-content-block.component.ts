import { Component, OnInit } from '@angular/core';
import {ContentBlockComponent} from "../content-block/content-block.component";
import {parameters} from "../../../parameters";
import {NofilterContentBlockComponent} from "../nofilter-content-block/nofilter-content-block.component";

@Component({
  selector: 'app-ssl-content-block',
  templateUrl: './ssl-content-block.component.html',
  styleUrls: ['./ssl-content-block.component.css']
})
export class SslContentBlockComponent extends NofilterContentBlockComponent implements OnInit {

  protected setDataUri(){
    this.data_uri = parameters.sslUri;
  }

}
