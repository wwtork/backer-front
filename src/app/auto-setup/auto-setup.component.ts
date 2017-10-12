import { Component, OnInit } from '@angular/core';
import {HostingStage} from "../model/hosting-stage";

@Component({
    selector: 'app-auto-setup',
    templateUrl: './auto-setup.component.html',
    styleUrls: ['./auto-setup.component.css']
})
export class AutoSetupComponent extends HostingStage implements OnInit {

    constructor() {
        super();
    }

    ngOnInit() {
    }

}
