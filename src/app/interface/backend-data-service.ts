import {Tariff} from "../model/tariff";
export interface IBackendDataService {
    getTariffs(): Array<Tariff>;
}
