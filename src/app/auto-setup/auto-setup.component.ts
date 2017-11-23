import {Component, OnInit} from '@angular/core';
import {HostingStage} from "../model/hosting-stage";
import {Observable} from "rxjs/Observable";
import {BackendDataService} from "../service/backend-data.service";

@Component({
    selector: 'app-auto-setup',
    templateUrl: './auto-setup.component.html',
    styleUrls: ['./auto-setup.component.css']
})
export class AutoSetupComponent extends HostingStage implements OnInit {

    private initialized = false;
    private backupPercent = 0;
    private firePercent = 0;

    constructor(private backendDataService: BackendDataService) {
        super();
    }

    ngOnInit() {
        this.initialized = true;


    }

    ngAfterViewInit() {
        if (this.hostingSettings.backupSupport/* && !this.hostingSettings.backupScanFinished*/) {
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
                        this.checkBackupScan();
                    }
                    , 2000);

            }
        }, (err) => {
            console.log(err);
            return false;
        });
    }

    startFirewallScan() {
        this.backendDataService.startFirewallScan(this.hostingSettings.getFirewallScanData()).then((result: Response) => {
            if (result.status) {
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
                console.log(result);
                if (result.hasOwnProperty('finished') && result['finished']) {
                    this.backupPercent = 100;
                    this.processBackupScanResults(result['entity'])
                } else {
                    this.backupPercent = result.hasOwnProperty('percent') ? result['percent'] : 0;
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

    processBackupScanResults(result) {
        this.hostingSettings.backupScanFinished = true;
        if (!result) {
            this.hostingSettings.scanErrors['searchError'] = true;
            this.hostingSettings.stage = 'backup-activation-error';
            this.onSubmit();
            return;
        }

        result = result[0];

        if (result.hasOwnProperty('errors')) {
            this.hostingSettings.scanErrors = result['errors'];
            this.hostingSettings.stage = 'backup-activation-error';
            this.onSubmit();
            return;
        }

        this.hostingSettings.site.fillFromJSON(result);

        if (!this.hostingSettings.site.ip) {
            this.hostingSettings.stage = 'ip-error';
            this.onSubmit();
        }
    }

    checkFirewallScan() {
        this.backendDataService.getFirewallScanData(this.hostingSettings.getFirewallScanData()).then((result: Response) => {
            if (result.status) {
                if (result['text_status'] == 2) {
                    if(result.hasOwnProperty('message') && result['message']){
                        this.hostingSettings.firewallScanResult = result['message'];
                        this.firePercent = 100;
                    }
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
