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
    private currentTariffId:number;

    constructor(private backendDataService:BackendDataService) {
        super();
        this.backendDataService.getTariffs().then((result) => {
            let tariffs = [];
                for (let i in result) {
                    tariffs.push((new Tariff).fillFromJSON(result[i]));
                }
                console.log(tariffs);
                this.setTariffs(tariffs);
            }
        );
    }

    setTariffs(tariffs){
        this.tariffs = tariffs;
    }

    ngOnInit() {
    }

    selectTriff(tariff:Tariff){
        this.currentTariffId = tariff.id;
    }


    next() {
        this.onSubmit();
    }

    pay() {
        if(this.currentTariffId){
            this.hostingSettings.tariffPay = true;
            this.hostingSettings.tariffId = this.currentTariffId;
            this.onSubmit();
        }
    }

    placeRequest() {
        if(this.currentTariffId){
            this.hostingSettings.tariffRequest = true;
            this.hostingSettings.tariffId = this.currentTariffId;
            this.onSubmit();
        }
    }

}
