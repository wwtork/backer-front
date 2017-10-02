import { Injectable } from '@angular/core';
import {Tariff} from "../model/tariff";
import {IBackendDataService} from "../interface/backend-data-service";

@Injectable()
export class BackendDataService implements IBackendDataService{

    constructor() {
    }

    getTariffs() {
        let tariff1 = new Tariff();
        let tariff2 = new Tariff();
        let tariff3 = new Tariff();
        return [
            tariff1,
            tariff2,
            tariff3
        ]
    }

}
