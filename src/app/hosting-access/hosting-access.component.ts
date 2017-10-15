import { Component, OnInit } from '@angular/core';
import {HostingStage} from "../model/hosting-stage";
import {BackendDataService} from "../service/backend-data.service";

@Component({
    selector: 'app-hosting-access',
    templateUrl: './hosting-access.component.html',
    styleUrls: ['./hosting-access.component.css']
})
export class HostingAccessComponent extends HostingStage implements OnInit {
    private show_password:boolean = false;
    private error:string;

    constructor(private backendDataService:BackendDataService) {
        super();
    }

    ngOnInit() {
    }

    skip() {
        this.hostingSettings.stage = 'auto-setup';
        this.onSubmit();
    }

    checkAccess() {
        this.backendDataService.checkAccess(this.hostingSettings.getHostAccessData()).then((result:Response) => {
            if(result.status){
                this.submit();
            }else{
                this.error = result['error'];
            }
        }, (err) => {
            this.error = err;
            return false;
        });
    }

    submit(){
        this.hostingSettings.stage = 'firewall-activation';
        this.onSubmit();
    }

    showPassword() {
        this.show_password = !this.show_password;
    }

}
