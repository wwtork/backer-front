import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import {Tariff} from "../model/tariff";

@Component({
    selector: 'app-tariff',
    templateUrl: './tariff.component.html',
    styleUrls: ['./tariff.component.css']
})
export class TariffComponent implements OnInit {

    @Input() tariff:Tariff;
    @Output() buttonClick:EventEmitter<any>;

    constructor() {
        this.buttonClick = new EventEmitter();
    }

    ngOnInit() {
    }

    onClick(){
        this.buttonClick.emit();
    }

}
