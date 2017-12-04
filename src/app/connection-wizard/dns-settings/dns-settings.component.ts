import {Component, Input, OnInit} from '@angular/core';
import {HostingStage} from "../model/hosting-stage";
import {WsrDnsInfo} from "../../dns-settings/wsr-interfaces";

@Component({
  selector: 'app-dns-settings',
  templateUrl: './dns-settings.component.html',
  styleUrls: ['./dns-settings.component.css']
})
export class DnsSettingsComponent extends HostingStage implements OnInit {

  // private wsrDnsInfo = null;

  // wsrDnsInfo: WsrDnsInfo = {
  //   domain: 'softanews.ru',
  //   dnsZone: {"softanews.ru":{"MX":[{"data":"mail.softanews.ru","ttl":4000,"pri":10},{"data":"mail.softanews.ru","ttl":4000,"pri":20}],"TXT":[{"data":"v=spf1 ip4:62.109.21.32 a mx ~all","ttl":4000}],"A":[{"ttl":60,"data":{"ipsType":"by_region","ipsList":[{"whois_country":"Australia","whois_region":"Sydney"},{"whois_country":"Belarus","whois_region":"Minsk"}],"auto_detect_nearest":true}}]},"mail.softanews.ru":{"A":[{"data":{"ipsType":"custom","ipsList":"62.109.21.32"},"ttl":1800}]},"ftp.softanews.ru":{"A":[{"data":{"ipsType":"custom","ipsList":"62.109.21.32"},"ttl":1800}]},"smtp.softanews.ru":{"A":[{"data":{"ipsType":"custom","ipsList":"62.109.21.32"},"ttl":1800}]}},
  //   hostList: {"softanews.ru":[{"host_ip":"62.109.21.32","check_type":1,"check_period_time":60,"check_url":"","needCodes":"200","minLength":300,"failedChecksCount":2,"succeedChecksCount":2,"responseTimeout":20}]}
  // };

  constructor() { super(); }

  onInit(){

  }

  onSave(){
    this.hostingSettings.stage = 'auto-setup';
    this.onSubmit();
  }

  onSkip(){
    this.hostingSettings.stage = 'auto-setup';
    this.onSubmit();
  }

  ngOnInit() {
  }

}
