import {Component, OnInit} from '@angular/core';
import {HostingStage} from "../model/hosting-stage";

@Component({
    selector: 'app-domain',
    templateUrl: './domain.component.html',
    styleUrls: ['./domain.component.css']
})
export class DomainComponent extends HostingStage implements OnInit {

    constructor() {
        super();
    }

    ngOnInit() {
    }

    onFormSubmit() {
        this.hostingSettings.stage = 'choose-method';
        this.onSubmit();
    }

}
