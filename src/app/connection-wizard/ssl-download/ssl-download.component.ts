import { Component, OnInit } from '@angular/core';
import { HostingStage } from "../model/hosting-stage";
// import { Ng4FilesSelected } from 'angular4-files-upload/src/app/ng4-files/declarations';
// import { Ng4FilesStatus } from 'angular4-files-upload/src/app/ng4-files/declarations';
@Component({
    selector: 'app-ssl-download',
    templateUrl: './ssl-download.component.html',
    styleUrls: ['./ssl-download.component.css']
})
export class SslDownloadComponent extends HostingStage implements OnInit {

    constructor() {
        super();
    }

    ngOnInit() {
    }


    onSkip(){

    }

    public selectedFiles;
    public errorCode;

    // public filesSelect(selectedFiles:Ng4FilesSelected):void {
    //     if (selectedFiles.status !== Ng4FilesStatus.STATUS_SUCCESS) {
    //         this.errorCode = selectedFiles.status;
    //         return;
    //     }
    //
    //     this.selectedFiles = selectedFiles.files;
    //     this.hostingSettings.sslFiles = selectedFiles.files;
    // }

}
