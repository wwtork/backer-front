import {Component, OnInit} from '@angular/core';
import {HostingStage} from "../model/hosting-stage";
import {Site} from "../model/site";

@Component({
    selector: 'ip-error',
    templateUrl: './ip-error.component.html',
    styleUrls: ['./ip-error.component.css']
})
export class IpErrorComponent extends HostingStage implements OnInit {

    public site:Site;

    constructor() {
        super();
    }

    ngOnInit() {

    }

    ngAfterViewInit() {
        this.site = this.hostingSettings.site;
    }

    onFormSubmit(){
        this.hostingSettings.stage = 'auto-setup';
        this.onSubmit();
    }

    onSkip(){
        this.site.ip = null;
        this.onFormSubmit()
    }

}
