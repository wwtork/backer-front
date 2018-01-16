import {Injectable, Type} from '@angular/core';
import {Hosting} from "./model/hosting";
import {DomainComponent} from "./domain/domain.component";
import {FirewallActivationComponent} from "./firewall-activation/firewall-activation.component";
// import {SslCheckComponent} from "./ssl-check/ssl-check.component";
// import {SslDownloadComponent} from "./ssl-download/ssl-download.component";
import {UpdateDnsComponent} from "./update-dns/update-dns.component";
import {AutoSetupComponent} from "./auto-setup/auto-setup.component";
import {HostingAccessComponent} from "./hosting-access/hosting-access.component";
import {ChooseTariffComponent} from "./choose-tariff/choose-tariff.component";
import {BackupActivationComponent} from "./backup-activation/backup-activation.component";
import {HostingStateComponent} from "./model/hosting-state-component";
import {ChooseMethodComponent} from "./choose-method/choose-method.component";
import {BackupActivationErrorComponent} from "./backup-activation-error/backup-activation-error.component";
import {IpErrorComponent} from "./ip-error/ip-error.component";
import {DnsSettingsComponent} from "./dns-settings/dns-settings.component";
import {ModalContentComponent} from "./model/modal-content-component";
import {FtpErrorModalComponent} from "./ftp-error-modal/ftp-error-modal.component";
import {RequestTariffModalComponent} from "./request-tariff-modal/request-tariff-modal.component";
import {FreeTariffModalComponent} from "./free-tariff-modal/free-tariff-modal.component";
import {BuyTariffModalComponent} from "./buy-tariff-modal/buy-tariff-modal.component";
const HOSTING_STATE_KEY = 'hosting_state';
const HOSTING_STAGE_KEY = 'hosting_stage';
const DEFAULT_STAGE = 'domain';
const DEFAULT_STATE = 'domain';
const HOSTING_KEY = 'hosting';
@Injectable()
export class GlobalDataService {

    private stages = {
        // 'ssl-download': new HostingStateComponent(SslDownloadComponent, 'settings'),
        'domain': new HostingStateComponent(DomainComponent, 'domain'),
        'hosting-access': new HostingStateComponent(HostingAccessComponent, 'settings'),
        'choose-tariff': new HostingStateComponent(ChooseTariffComponent, 'tariff'),
        'backup-activation': new HostingStateComponent(BackupActivationComponent, 'settings'),
        'firewall-activation': new HostingStateComponent(FirewallActivationComponent, 'settings'),
        // 'ssl-check': new HostingStateComponent(SslCheckComponent, 'settings'),
        'hosting-state': new HostingStateComponent(UpdateDnsComponent, 'settings'),
        'auto-setup': new HostingStateComponent(AutoSetupComponent, 'settings'),
        'choose-method': new HostingStateComponent(ChooseMethodComponent, 'settings'),
        'backup-activation-error': new HostingStateComponent(BackupActivationErrorComponent, 'settings'),
        'ip-error': new HostingStateComponent(IpErrorComponent, 'settings'),
        'dns-settings': new HostingStateComponent(DnsSettingsComponent, 'settings'),
    };


    private modals = {
        'ftp-error': new ModalContentComponent(FtpErrorModalComponent, 'ftp-error'),
        'default': new ModalContentComponent(FtpErrorModalComponent, 'ftp-error'),
        'request-tariff': new ModalContentComponent(RequestTariffModalComponent, 'request-tariff'),
        'free-tariff': new ModalContentComponent(FreeTariffModalComponent, 'free-tariff'),
        'buy-tariff': new ModalContentComponent(BuyTariffModalComponent, 'buy-tariff')
    };

    constructor() {
    }

    getHostingState(): string {
        let state = localStorage.getItem(HOSTING_STATE_KEY);
        return state !== null ? state : DEFAULT_STATE;
    }

    getHostingStage(): string {
        let stage = localStorage.getItem(HOSTING_STAGE_KEY);
        return stage ? stage : DEFAULT_STAGE;
    }

    setHostingState(state: string): void {
        localStorage.setItem(HOSTING_STATE_KEY, state);
    }

    getHosting(): Hosting {
        let hosting = localStorage.getItem(HOSTING_KEY);
        return hosting !== null ? JSON.parse(hosting) : hosting;
    }

    updateHosting(hosting: Hosting) {
        localStorage.setItem(HOSTING_KEY, JSON.stringify(hosting));
    }

    getStages(): Object {
        return this.stages;
    }

    setHostingStage(stage: Number): void {
        localStorage.setItem(HOSTING_STAGE_KEY, stage.toString());
    }

    getStage(stage: string = null): HostingStateComponent {
        return this.getStages()[stage == null ? this.getHostingStage() : stage];
    }

    getModal(modal: string = null): ModalContentComponent {
        return this.getModals()[modal == null ? 'default' : modal];
    }

    private getModals() {
        return this.modals;
    }
}
