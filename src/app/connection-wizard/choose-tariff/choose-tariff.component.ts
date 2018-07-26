import {Component, OnInit} from '@angular/core';
import {Tariff} from "../model/tariff";
import {BackendDataService} from "../../backend-data.service";
import {HostingStage} from "../model/hosting-stage";
import {Ng4LoadingSpinnerService} from "ng4-loading-spinner";
import {ModalComponent} from "../modal/modal.component";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {Method} from "../model/method";

@Component({
    selector: 'app-choose-tariff',
    templateUrl: './choose-tariff.component.html',
    styleUrls: ['./choose-tariff.component.css']
})
export class ChooseTariffComponent extends HostingStage implements OnInit {

    tariffs: Array<Tariff>;
    currentTariff: Tariff;
    defaultMethod: Method;

    constructor(private backendDataService: BackendDataService, public spinnerService: Ng4LoadingSpinnerService, private modalService: NgbModal) {
        super();
        this.spinnerService.show();
        this.backendDataService.getTariffs().then((result) => {
                let tariffs = [];
                for (let i in result) {
                    tariffs.push((new Tariff).fillFromJSON(result[i]));
                }
                this.setTariffs(tariffs);
                this.backendDataService.getDefaultMethod().then((result) => {
                        this.defaultMethod = (new Method).fillFromJSON(result);
                        this.spinnerService.hide();
                    }
                );
            }
        );
    }

    openModal(modal_name, func) {
        const modalRef = this.modalService.open(ModalComponent);
        modalRef.componentInstance.modal_name = modal_name;
        modalRef.componentInstance.settings = this.hostingSettings;
        modalRef.componentInstance.data = {
            'tariff_variants' : this.currentTariff.tariff_variants,
            'tariff_name': this.currentTariff.name,
            'method_price': this.defaultMethod.price
        };
        modalRef.result.then(
            func,
        );
    }

    setTariffs(tariffs) {
        this.tariffs = tariffs;
    }

    ngOnInit() {
    }

    selectTariff(tariff: Tariff) {
        this.currentTariff = tariff;
    }


    next() {
        switch (this.currentTariff.type) {
            case 'free':
                this.openModal('free-tariff', (result: any) => {
                    if (result == 'skip') {
                        this.hostingSettings.stage = 'backup-activation';
                        // this.hostingSettings.tariffId = this.currentTariff.id;
                        this.onSubmit();
                    } else {
                        this.spinnerService.show();
                        let data = {domain : this.hostingSettings.domain, method_id: this.defaultMethod.product_id};
                        this.backendDataService.buy(data).then((res) => {
                            if(res['status']) {
                                this.spinnerService.hide();
                                this.hostingSettings.stage = 'backup-activation';
                                this.onSubmit();
                            }else{
                                this.spinnerService.hide();
                                BackendDataService.pay(this.defaultMethod.price, this.defaultMethod.product_id);
                            }
                        });

                    }
                });
                break;
            case 'pay':
                this.openModal('buy-tariff', (result: any) => {
                    if (result == 'skip') {

                    } else {
                        this.spinnerService.show();
                        let data = {domain : this.hostingSettings.domain, tariff_id: result[1]};
                        if(result[2]) data['method_id'] = this.defaultMethod.product_id;
                        this.backendDataService.buy(data).then((res) => {
                            if(res['status']) {
                                this.spinnerService.hide();
                                this.hostingSettings.tariffPay = true;
                                this.hostingSettings.tariffId = this.currentTariff.id;
                                this.hostingSettings.stage = 'backup-activation';
                                this.onSubmit();
                            }else{
                                this.spinnerService.hide();
                                BackendDataService.pay(result[0], result[1]);
                            }
                        });
                    }
                });

                break;
            case 'request':
                this.openModal('request-tariff', (result: any) => {
                    if (result == 'skip') {

                    } else {
                        this.spinnerService.show();
                        this.backendDataService.requestTariff(result['tariff_data']).then(() => {
                            this.spinnerService.hide();
                            this.hostingSettings.stage = 'backup-activation';
                            this.onSubmit();
                        });

                    }
                });
                break;
        }
    }



}
