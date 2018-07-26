import {Component, OnInit} from '@angular/core';
import {HostingStage} from "../model/hosting-stage";
import {BackendDataService} from "../../backend-data.service";
import {parameters} from "../../../parameters";
import {AuthenticationService} from "../../authentication/authentication.service";
import {Ng4LoadingSpinnerService} from "ng4-loading-spinner";

@Component({
    selector: 'app-auto-setup',
    templateUrl: './auto-setup.component.html',
    styleUrls: ['./auto-setup.component.css']
})
export class AutoSetupComponent extends HostingStage implements OnInit {

    initialized = false;
    backupPercent = 0;
    firePercent = 0;

    isDnsInfoBlank = true;

    private backupScanErrors  = {
        6: 'configError',
        5: 'cmsNotFoundError',
        4: 'ipError',
        3: 'searchError',
        2: 'loginError',
        1: 'connectionError',
        7: 'scriptError',
        8: 'permissionError'
    };

    constructor(private backendDataService: BackendDataService, public spinnerService: Ng4LoadingSpinnerService) {
        super();
    }

    ngOnInit() {
        this.initialized = true;
        if(this.hostingSettings.backupScanFinished)
            this.backupPercent = 100;
        if(this.hostingSettings.firewallScanFinished) {
            this.isDnsInfoBlank = !this.hostingSettings.firewallScanResult;
            this.firePercent = 100;
        }
    }

    ngAfterViewInit() {
        if (this.hostingSettings.backupSupport && !this.hostingSettings.backupScanFinished) {
            this.startBackupScan();
        }
        if (this.hostingSettings.firewallSupport && !this.hostingSettings.firewallScanFinished) {
            this.startFirewallScan();
        }
    }

    startBackupScan() {
        this.backendDataService.startBackupScan(this.hostingSettings.getHostScanData()).then((result: Response) => {
            if (result.status) {
                setTimeout(() => {
                        this.hostingSettings.id = result['id'];
                        this.checkBackupScan();
                    }
                    , 2000);

            }
        }, (err) => {
            console.log(err);
            return false;
        });
    }

    showDnsSettings(){
        this.hostingSettings.stage = 'dns-settings';
        this.onSubmit();
    }

    startFirewallScan() {
        this.backendDataService.startFirewallScan(this.hostingSettings.getFirewallScanData()).then((result: Response) => {
            if (result.status) {
                this.hostingSettings.firewallScanId = result['id'];
                setTimeout(() => {
                        this.checkFirewallScan();
                    }
                    , 2000);
            }
        }, (err) => {
            console.log(err);
            return false;
        });
    }

    checkBackupScan() {
        this.backendDataService.getBackupScanData(this.hostingSettings.getHostScanData()).then((result: Response) => {
            if (result.status) {
                if (result.hasOwnProperty('finished') && result['finished']) {
                    this.processBackupScanResults(result['entity'].length != 0 ? result['entity'] : result);
                } else {
                    this.backupPercent = result.hasOwnProperty('percent') ? result['percent'] : this.backupPercent;
                    setTimeout(() => {
                        this.checkBackupScan();
                    }, 2000);
                }
            }
        }, (err) => {
            console.log(err);
            return false;
        });
    }

    public finish(){
        this.spinnerService.show();
        this.backendDataService.updateSiteSettings(this.hostingSettings).then((result: Response) => {
            if (result.status) {
                this.spinnerService.hide();
                window.location.href = parameters.backerUrl + '?api_key=' + AuthenticationService.getUser().apiKey;
            } else {
                this.spinnerService.hide();
            }

        });
    }

    processBackupScanResults(result) {
        if(result['error_codes']) {
            for (let error of result['error_codes']) {
                this.hostingSettings.scanErrors[this.backupScanErrors[error]] = true
            }
            if (this.hostingSettings.scanErrors['searchError'] ||
                this.hostingSettings.scanErrors['scriptError'] ||
                this.hostingSettings.scanErrors['permissionError']) {
                this.hostingSettings.stage = 'backup-activation-error';
                this.onSubmit();
                return false;
            }

            this.hostingSettings.backupScanFinished = true;
            this.hostingSettings.site.fillFromJSON(result);
            this.backupPercent = 100;


            if (this.hostingSettings.scanErrors['ipError']) {
                this.hostingSettings.stage = 'ip-error';
                this.onSubmit();
                return false;
            }
        }else{
            this.hostingSettings.backupScanFinished = true;
            this.hostingSettings.site.fillFromJSON(result);
            this.backupPercent = 100;
        }
    }

    checkFirewallScan() {
        this.backendDataService.getFirewallScanData(this.hostingSettings.getFirewallScanData()).then((result: Response) => {
            if (result.status) {
                if (result['text_status'] == 2) {
                    this.processFirewallScanResults(result);
                } else {
                    setTimeout(() => {
                        this.checkFirewallScan();
                    }, 2000);
                }
            }
        }, (err) => {
            console.log(err);
            return false;
        });
    }

    private processFirewallScanResults(result) {
        this.hostingSettings.firewallScanResult = result['waf_domain_data'];
        this.firePercent = 100;
        this.hostingSettings.firewallScanFinished = true;
        this.isDnsInfoBlank = !result['waf_domain_data'];
    }

    // startFirewallScan(){
    //     Observable.interval(10000).takeWhile(() => true).subscribe(() => this.backendDataService.getFirewallScanData(this.hostingSettings.getHostScanData()));
    // }

    activateBackup() {
        this.hostingSettings.stage = 'backup-activation';
        this.onSubmit();
    }

    activateCDN() {
        this.hostingSettings.stage = 'firewall-activation';
        this.onSubmit();
    }
}
