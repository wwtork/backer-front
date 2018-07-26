import { Component, OnInit } from '@angular/core';
import {parameters} from "../../../parameters";
import {NofilterContentBlockComponent} from "../nofilter-content-block/nofilter-content-block.component";

@Component({
  selector: 'app-firecdn-content-block',
  templateUrl: './firecdn-content-block.component.html',
  styleUrls: ['./firecdn-content-block.component.css']
})
export class FirecdnContentBlockComponent extends NofilterContentBlockComponent implements OnInit {

  protected setDataUri(){
    this.data_uri = parameters.fixedWebsiteUri;
  }

}
