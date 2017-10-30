import {Component, OnInit} from '@angular/core';
import {HostingStage} from "../model/hosting-stage";

@Component({
    selector: 'app-ip-error',
    templateUrl: './ip-error.component.html',
    styleUrls: ['./ip-error.component.css']
})
export class IpErrorComponent extends HostingStage implements OnInit {

    private site;

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
