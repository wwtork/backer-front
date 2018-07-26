import {Component, OnInit} from '@angular/core';
import {ContentBlockComponent} from "../content-block/content-block.component";
import {parameters} from "../../../parameters";

@Component({
    selector: 'app-cached-static-response-content-block',
    templateUrl: './cached-static-response-content-block.component.html',
    styleUrls: ['./cached-static-response-content-block.component.css']
})
export class CachedStaticResponseContentBlockComponent extends ContentBlockComponent implements OnInit {

    protected setDataUri() {
        this.data['percent'] = 0;
        this.data_uri = parameters.cachedStaticUri;
    }
}
