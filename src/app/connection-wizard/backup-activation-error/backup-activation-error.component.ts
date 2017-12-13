import {Component, OnInit} from '@angular/core';
import {HostingStage} from "../model/hosting-stage";
import {BackendDataService} from "../backend-data.service";

@Component({
    selector: 'app-backup-activation-error',
    templateUrl: './backup-activation-error.component.html',
    styleUrls: ['./backup-activation-error.component.css']
})
export class BackupActivationErrorComponent extends HostingStage implements OnInit {

    public errors: { searchError: boolean; permissionError: boolean; scriptError: boolean };

    constructor(private backendDataService:BackendDataService) {
        super();
    }

    ngOnInit() {
        console.log(this.hostingSettings);
        this.errors = this.hostingSettings.scanErrors;
    }

    ngAfterViewInit() {
        //this.errors = this.hostingSettings.scanErrors;
    }

    onFormSubmit(){
        this.hostingSettings.stage = 'auto-setup';
        this.onSubmit();
    }

    updatePath(path:string){
        this.hostingSettings.scanPath = path;
    }

    onSkip(){
        this.hostingSettings.backupSupport = false;
        this.hostingSettings.stage = 'auto-setup';
        this.onSubmit();
    }

    onChangeAccount(){
        this.hostingSettings.stage = 'hosting-access';
        this.onSubmit();
    }

}
