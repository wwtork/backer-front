import { Component, OnInit } from '@angular/core';
import {HostingStage} from "../model/hosting-stage";
import {Method} from "../model/method";
import {BackendDataService} from "../backend-data.service";
import {Ng4LoadingSpinnerService} from "ng4-loading-spinner";

@Component({
    selector: 'app-choose-method',
    templateUrl: './choose-method.component.html',
    styleUrls: ['./choose-method.component.css']
})
export class ChooseMethodComponent extends HostingStage implements OnInit {

    methods:Array<Method>;

    constructor(private backendDataService:BackendDataService, public spinnerService: Ng4LoadingSpinnerService) {
        super();
        this.spinnerService.show();
        this.backendDataService.getMethods().then((result) => {
                let methods = [];
                for (let i in result) {
                    methods.push((new Method).fillFromJSON(result[i]));
                }
                this.setMethods(methods);
                this.spinnerService.hide();
            }
        );
    }

    setMethods(methods){
       this.methods = methods;
    }

    ngOnInit() {
    }

    selectMethod(method:Method) {
        this.hostingSettings.methodId = method.id;
        this.hostingSettings.stage = 'backup-activation';
        this.onSubmit();
    }

}
