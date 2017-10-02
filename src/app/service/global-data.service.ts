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
const HOSTING_STATE_KEY = 'hosting_state';
const HOSTING_STAGE_KEY = 'hosting_stage';
const DEFAULT_STAGE = 0;
const DEFAULT_STATE = 'domain';
const HOSTING_KEY = 'hosting';
@Injectable()
export class GlobalDataService {

    constructor() {
    }

    getHostingState():string {
        var state = localStorage.getItem(HOSTING_STATE_KEY);
        return state !== null ? state : DEFAULT_STATE;
    }

    getHostingStage():number {
        var stage = parseInt(localStorage.getItem(HOSTING_STAGE_KEY), 10);
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

    getStages():Array<IHostingStateComponent> {
        return [
            new HostingStateComponent(DomainComponent, 'domain'),
            new HostingStateComponent(HostingAccessComponent, 'domain'),
            new HostingStateComponent(ChooseTariffComponent, 'tariff'),
            new HostingStateComponent(BackupActivationComponent, 'settings'),
            new HostingStateComponent(FirewallActivationComponent, 'settings'),
            new HostingStateComponent(SslCheckComponent, 'settings'),
            new HostingStateComponent(SslDownloadComponent, 'settings'),
            new HostingStateComponent(UpdateDnsComponent, 'settings'),
            new HostingStateComponent(AutoSetupComponent, 'settings'),
        ];
    }

    setHostingStage(stage:Number):void {
        localStorage.setItem(HOSTING_STAGE_KEY, stage.toString());
    }

    getStage(stage:number = null):IHostingStateComponent {
        return this.getStages()[stage == null ? this.getHostingStage() : stage];
    }
}
