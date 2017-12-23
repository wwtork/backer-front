import { Component, OnInit } from '@angular/core';
import {HostingStage} from "../model/hosting-stage";

@Component({
    selector: 'app-backup-activation',
    templateUrl: './backup-activation.component.html',
    styleUrls: ['./backup-activation.component.css']
})
export class BackupActivationComponent extends HostingStage implements OnInit {

    constructor() {
        super();
    }

    onAcceptSubmit() {
        this.hostingSettings.backupSupport = true;
        this.hostingSettings.stage = 'hosting-access';
        this.onSubmit();
    }

    onSkip() {
        this.hostingSettings.backupSupport = false;
        this.hostingSettings.firewallSupport = false;
        this.hostingSettings.stage = 'auto-setup';
        this.onSubmit();
    }

    ngOnInit() {
    }

}
