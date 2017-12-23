import {Component, Input, OnInit} from '@angular/core';
import {HostingStage} from "../model/hosting-stage";
import {WsrDnsInfo} from "../../dns-settings/wsr-interfaces";

@Component({
    selector: 'app-dns-settings',
    templateUrl: './dns-settings.component.html',
    styleUrls: ['./dns-settings.component.css']
})
export class DnsSettingsComponent extends HostingStage implements OnInit {

    constructor() {
        super();
    }

    dnsInfo = {};

    onInit() {
        console.log(this.hostingSettings.firewallScanResult)
    }

    onSave() {
        this.hostingSettings.stage = 'auto-setup';
        this.onSubmit();
    }

    onSkip() {
        this.hostingSettings.stage = 'auto-setup';
        this.onSubmit();
    }

    ngOnInit() {
        this.dnsInfo = {
            domain: this.hostingSettings.domain,
            hostList: this.hostingSettings.firewallScanResult[0]['waf_settings']['hostList'],
            dnsZone: this.hostingSettings.firewallScanResult[0]['dns_zone']
        };
    }

}
