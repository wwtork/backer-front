import {Component, OnInit} from '@angular/core';
import {ContentBlockComponent} from "../content-block/content-block.component";
import {parameters} from "../../../parameters";

@Component({
    selector: 'app-cached-dynamic-response-content-block',
    templateUrl: './cached-dynamic-response-content-block.component.html',
    styleUrls: ['./cached-dynamic-response-content-block.component.css']
})
export class CachedDynamicResponseContentBlockComponent extends ContentBlockComponent implements OnInit{

    protected setDataUri() {
        this.data_uri = parameters.cachedDynamicUri;
    }
}
