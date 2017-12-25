import { Component, OnInit } from '@angular/core';
import {Tariff} from "../model/tariff";
//import {IBackendDataService} from "../interface/backend-data-service";
import {BackendDataService} from "../backend-data.service";
import {HostingStage} from "../model/hosting-stage";
import {Ng4LoadingSpinnerService} from "ng4-loading-spinner";

@Component({
    selector: 'app-choose-tariff',
    templateUrl: './choose-tariff.component.html',
    styleUrls: ['./choose-tariff.component.css']
})
export class ChooseTariffComponent extends HostingStage implements OnInit {

    tariffs:Array<Tariff>;
    currentTariff:Tariff;

    constructor(private backendDataService:BackendDataService, public spinnerService: Ng4LoadingSpinnerService) {
        super();
        this.spinnerService.show();
        this.backendDataService.getTariffs().then((result) => {
            let tariffs = [];
                for (let i in result) {
                    tariffs.push((new Tariff).fillFromJSON(result[i]));
                }
                this.setTariffs(tariffs);
                this.spinnerService.hide();
            }
        );
    }

    setTariffs(tariffs){
        this.tariffs = tariffs;
    }

    ngOnInit() {
    }

    selectTariff(tariff:Tariff){
        this.currentTariff = tariff;
    }


    next() {
        this.hostingSettings.stage = 'backup-activation';
        this.hostingSettings.tariffId = this.currentTariff.id;
        this.onSubmit();
    }

    pay() {
        if(this.currentTariff){
            this.hostingSettings.tariffPay = true;
            this.hostingSettings.tariffId = this.currentTariff.id;
            this.hostingSettings.stage = 'backup-activation';
            this.onSubmit();
        }
    }

    placeRequest() {
        if(this.currentTariff){
            this.hostingSettings.tariffRequest = true;
            this.hostingSettings.tariffId = this.currentTariff.id;
            this.hostingSettings.stage = 'backup-activation';
            this.onSubmit();
        }
    }

}
