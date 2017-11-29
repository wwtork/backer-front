import { Component, OnInit } from '@angular/core';
import {HostingStage} from "../model/hosting-stage";
import {Method} from "../model/method";
import {BackendDataService} from "../backend-data.service";

@Component({
    selector: 'app-choose-method',
    templateUrl: './choose-method.component.html',
    styleUrls: ['./choose-method.component.css']
})
export class ChooseMethodComponent extends HostingStage implements OnInit {

    private methods:Array<Method>;

    constructor(private backendDataService:BackendDataService) {
        super();
        this.backendDataService.getMethods().then((result) => {
                let methods = [];
                for (let i in result) {
                    methods.push((new Method).fillFromJSON(result[i]));
                }
                this.setMethods(methods);
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