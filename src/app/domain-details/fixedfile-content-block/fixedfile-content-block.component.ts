import { Component, OnInit } from '@angular/core';
import {parameters} from "../../../parameters";
import {NofilterContentBlockComponent} from "../nofilter-content-block/nofilter-content-block.component";

@Component({
  selector: 'app-fixedfile-content-block',
  templateUrl: './fixedfile-content-block.component.html',
  styleUrls: ['./fixedfile-content-block.component.css']
})
export class FixedfileContentBlockComponent extends NofilterContentBlockComponent implements OnInit {

  protected setDataUri(){
    this.data_uri = parameters.fixedWebsiteUri;
  }

}
