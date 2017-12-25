import { Component, OnInit } from '@angular/core';
import {HostingStage} from "../model/hosting-stage";
import {BackendDataService} from "../backend-data.service";
import {Site} from "../model/site";
import {Ng4LoadingSpinnerService} from "ng4-loading-spinner";

@Component({
    selector: 'app-hosting-access',
    templateUrl: './hosting-access.component.html',
    styleUrls: ['./hosting-access.component.css']
})
export class HostingAccessComponent extends HostingStage implements OnInit {
    show_password:boolean = false;
    errors;

    constructor(private backendDataService:BackendDataService, public spinnerService: Ng4LoadingSpinnerService) {
        super();
    }

    ngOnInit() {
    }

    skip() {
        this.hostingSettings.stage = 'auto-setup';
        this.onSubmit();
    }

    checkAccess() {
        this.spinnerService.show();
        this.backendDataService.checkAccess(this.hostingSettings.getHostAccessData()).then((result:Response) => {
            if(result.status){
                //this.saveHostingSettings();
                this.spinnerService.hide();
                this.submit();
            }else{
                this.spinnerService.hide();
                this.errors = Object.keys(result['error']);
            }
        }, (err) => {
            this.errors = [err];
            return false;
        });
    }

    // saveHostingSettings() {
    //     this.backendDataService.saveHostingSettings(this.hostingSettings).then((result:Response) => {
    //         this.spinnerService.hide();
    //         if(result.status){
    //
    //             this.hostingSettings.id = result['data']['serverId'];
    //             this.hostingSettings.site = new Site();
    //             this.hostingSettings.site.id = result['data']['siteId'];
    //             this.submit();
    //         }else{
    //             this.errors = result['error'];
    //         }
    //     }, (err) => {
    //         this.errors = err;
    //         return false;
    //     });
    // }

    submit(){
        this.hostingSettings.stage = (!this.hostingSettings.firewallSupport) ? 'firewall-activation' : 'auto-setup';
        this.onSubmit();
    }

    showPassword() {
        this.show_password = !this.show_password;
    }

}
