import {Component, Input, OnInit} from '@angular/core';

@Component({
    selector: 'app-buy-tariff-modal',
    templateUrl: './buy-tariff-modal.component.html',
    styleUrls: ['./buy-tariff-modal.component.css']
})
export class BuyTariffModalComponent implements OnInit {

    @Input() activeModal;
    @Input() data;
    @Input() settings;

    tariff_id:any;
    price = 0;
    method_key = true;
    tariff_variants: any;
    tariff_name: any;
    total_price: number = 0;
    method_price: number  = 0;

    constructor() {
    }

    onSubmit(value){
        this.activeModal.close([this.convertString(value.sum) + (value.method_key ? this.method_price : 0), this.tariff_id]);
    }

    onClick(id){
        this.tariff_id = id;
    }

    convertString(string){
        return parseFloat(string);
    }

    ngOnInit() {
        this.tariff_name = this.data['tariff_name'];
        this.tariff_variants = this.data['tariff_variants'];
        this.method_price = this.data['method_price'];
        this.total_price = this.method_key ? this.method_price : 0;
    }

}
