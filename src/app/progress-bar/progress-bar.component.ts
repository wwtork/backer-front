import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {AutoSetupComponent} from "../auto-setup/auto-setup.component";
import {HostingSettings} from "../model/hosting-settings";

@Component({
    selector: 'app-progress-bar',
    templateUrl: './progress-bar.component.html',
    styleUrls: ['./progress-bar.component.css']
})
export class ProgressBarComponent implements OnInit {

    @Input() title:string;
    @Input() percent;
    @Output() activate: EventEmitter<any> = new EventEmitter();
    @Input() hostingSettings:HostingSettings;
    @Input() skipped;

    constructor() {
        if(!this.skipped) this.startProcess();
    }

    ngOnInit() {

    }

    onActivate(){
        this.activate.emit();
        this.skipped = false;
    }

    private startProcess():void {

    }
}
