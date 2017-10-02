import { Component, OnInit } from '@angular/core';
import {Tariff} from "../model/tariff";
//import {IBackendDataService} from "../interface/backend-data-service";
import {BackendDataService} from "../service/backend-data.service";
import {HostingStage} from "../model/hosting-stage";

@Component({
    selector: 'app-choose-tariff',
    templateUrl: './choose-tariff.component.html',
    styleUrls: ['./choose-tariff.component.css']
})
export class ChooseTariffComponent extends HostingStage implements OnInit {

    private tariffs:Array<Tariff>;

    constructor(private backendDataService:BackendDataService) {
        super();
        this.tariffs = this.backendDataService.getTariffs();
    }

    ngOnInit() {
    }

}
