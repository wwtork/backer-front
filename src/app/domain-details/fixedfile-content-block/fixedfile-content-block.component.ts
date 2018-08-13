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
    this.data_uri = parameters.fixedFileUri;
  }

    protected updateInfo(key, value) {
        let result = this.backendDataService.securedPost(parameters.switchFixedFileUri.replace('{siteId}', this.siteId.toString()), JSON.stringify({interval: value})).then((result) => {
            this.updateContent();
        }, (err) => {
            return [];
        });
    }

}
