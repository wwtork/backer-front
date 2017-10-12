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
    @Input() percent = 0;
    @Input() optionName:string;
    @Output() activate: EventEmitter<string>;
    @Input() hostingSettings:HostingSettings;
    @Input() skipped = true;

    constructor() {
        if(!this.skipped) this.startProcess();
        if(this.skipped) this.activate = new EventEmitter();
    }

    ngOnInit() {
    }

    activate(){
        if(this.hostingSettings.hasOwnProperty(this.optionName)) {
            this.activate.emit(this.optionName);
            this.skipped = false;
        }
    }

    private startProcess():void {

    }
}
