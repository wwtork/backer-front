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
    private currentTariff:Tariff;

    constructor(private backendDataService:BackendDataService) {
        super();
        console.log(this.hostingSettings);
        this.backendDataService.getTariffs().then((result) => {
            let tariffs = [];
                for (let i in result) {
                    tariffs.push((new Tariff).fillFromJSON(result[i]));
                }
                this.setTariffs(tariffs);
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
        this.hostingSettings.stage = 'choose-method';
        this.hostingSettings.tariffId = this.currentTariff.id;
        this.onSubmit();
    }

    pay() {
        if(this.currentTariff){
            this.hostingSettings.tariffPay = true;
            this.hostingSettings.tariffId = this.currentTariff.id;
            this.hostingSettings.stage = 'choose-method';
            this.onSubmit();
        }
    }

    placeRequest() {
        if(this.currentTariff){
            this.hostingSettings.tariffRequest = true;
            this.hostingSettings.tariffId = this.currentTariff.id;
            this.hostingSettings.stage = 'choose-method';
            this.onSubmit();
        }
    }

}
