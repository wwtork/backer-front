import { Component, OnInit } from '@angular/core';
import {HostingStage} from "../model/hosting-stage";

@Component({
    selector: 'app-auto-setup',
    templateUrl: './auto-setup.component.html',
    styleUrls: ['./auto-setup.component.css']
})
export class AutoSetupComponent extends HostingStage implements OnInit {

    private initialized = false;

    constructor() {
        super();
    }

    ngOnInit() {
        console.log(this.hostingSettings);
        this.initialized = true;
    }

    activateBackup(){
        this.hostingSettings.stage = 'backup-activation';
        this.onSubmit();
    }

    activateCDN(){
        this.hostingSettings.stage = 'firewall-activation';
        this.onSubmit();
    }
}
