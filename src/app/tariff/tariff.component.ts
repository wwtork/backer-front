import { Component, OnInit, Input } from '@angular/core';
import {Tariff} from "../model/tariff";

@Component({
    selector: 'app-tariff',
    templateUrl: './tariff.component.html',
    styleUrls: ['./tariff.component.css']
})
export class TariffComponent implements OnInit {

    @Input() tariff:Tariff;

    constructor() {

    }

    ngOnInit() {
    }

}
