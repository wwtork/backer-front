import { Injectable, Type } from '@angular/core';
import {Hosting} from "../model/hosting";
import {DomainComponent} from "../domain/domain.component";
import {FirewallActivationComponent} from "../firewall-activation/firewall-activation.component";
import {SslCheckComponent} from "../ssl-check/ssl-check.component";
import {SslDownloadComponent} from "../ssl-download/ssl-download.component";
import {UpdateDnsComponent} from "../update-dns/update-dns.component";
import {AutoSetupComponent} from "../auto-setup/auto-setup.component";
import {HostingAccessComponent} from "../hosting-access/hosting-access.component";
import {ChooseTariffComponent} from "../choose-tariff/choose-tariff.component";
import {BackupActivationComponent} from "../backup-activation/backup-activation.component";
import {IHostingStateComponent} from "../interface/hosting-state-component";
import {HostingStateComponent} from "../model/hosting-state-component";
import {ChooseMethodComponent} from "../choose-method/choose-method.component";
const HOSTING_STATE_KEY = 'hosting_state';
const HOSTING_STAGE_KEY = 'hosting_stage';
const DEFAULT_STAGE = 'choose-tariff';
const DEFAULT_STATE = 'domain';
const HOSTING_KEY = 'hosting';
@Injectable()
export class GlobalDataService {

    private stages = {
        'ssl-download': new HostingStateComponent(SslDownloadComponent, 'settings'),
        'domain': new HostingStateComponent(DomainComponent, 'domain'),
        'hosting-access': new HostingStateComponent(HostingAccessComponent, 'settings'),
        'choose-tariff': new HostingStateComponent(ChooseTariffComponent, 'tariff'),
        'backup-activation': new HostingStateComponent(BackupActivationComponent, 'settings'),
        'firewall-activation': new HostingStateComponent(FirewallActivationComponent, 'settings'),
        'ssl-check': new HostingStateComponent(SslCheckComponent, 'settings'),
        'hosting-state': new HostingStateComponent(UpdateDnsComponent, 'settings'),
        'auto-setup': new HostingStateComponent(AutoSetupComponent, 'settings'),
        'choose-method': new HostingStateComponent(ChooseMethodComponent, 'settings'),
    };

    constructor() {
    }

    getHostingState():string {
        var state = localStorage.getItem(HOSTING_STATE_KEY);
        return state !== null ? state : DEFAULT_STATE;
    }

    getHostingStage():string {
        var stage = localStorage.getItem(HOSTING_STAGE_KEY);
        console.log(stage);
        return stage ? stage : DEFAULT_STAGE;
    }

    setHostingState(state:string):void {
        localStorage.setItem(HOSTING_STATE_KEY, state);
    }

    getHosting():Hosting {
        var hosting = localStorage.getItem(HOSTING_KEY);
        return hosting !== null ? JSON.parse(hosting) : hosting;
    }

    updateHosting(hosting:Hosting) {
        localStorage.setItem(HOSTING_KEY, JSON.stringify(hosting));
    }

    getStages():Object {
        return this.stages;
    }

    setHostingStage(stage:Number):void {
        localStorage.setItem(HOSTING_STAGE_KEY, stage.toString());
    }

    getStage(stage:string = null):IHostingStateComponent {
        console.log(this.getHostingStage());
        return this.getStages()[stage == null ? this.getHostingStage() : stage];
    }
}
