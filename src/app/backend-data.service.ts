import { Injectable } from '@angular/core';
import {Http} from "@angular/http";
import {HostingSettings} from "./connection-wizard/model/hosting-settings";
import { parameters } from 'parameters';
import {AuthenticationService} from "./authentication/authentication.service";

@Injectable()
export class BackendDataService {

    constructor(private http:Http) {

    }

    // getUser():User{
    //     return (new User).fillFromJSONString(localStorage.getItem(USER_KEY));
    // }

    getMethods(){
        return  this.securedPost(parameters.getMethodsUri).then((result) => {
            return result;
        }, (err) => {
            console.log(err);
            return [];
        });

    }

    checkAccess(hostAccessData){
        return  this.securedPost(parameters.checkAccessUri, JSON.stringify( {hostAccessData: hostAccessData})).then((result) => {
            return result;
        }, (err) => {
            console.log(err);
            return [];
        });
    }

    startFirewallScan(fireScanData) {
        return  this.securedPost(parameters.firewallStartScanUri, JSON.stringify({fireScanData: fireScanData})).then((result) => {
            return result;
        }, (err) => {
            console.log(err);
            return [];
        });
    }

    getFirewallScanData(fireScanData) {
        return  this.securedPost(parameters.firewallScanDataUri + fireScanData.id, JSON.stringify({fireScanData: fireScanData})).then((result) => {
            return result;
        }, (err) => {
            console.log(err);
            return [];
        });
    }


    startBackupScan(hostScanData) {
        if(!hostScanData.domain) hostScanData.domain = AuthenticationService.getUser().website;
        return  this.securedPost(parameters.backupStartScanUri, JSON.stringify({hostScanData: hostScanData})).then((result) => {
            return result;
        }, (err) => {
            console.log(err);
            return [];
        });
    }

    getBackupScanData(hostScanData) {
        if(!hostScanData.domain) hostScanData.domain = AuthenticationService.getUser().website;
        return  this.securedPost(parameters.backupScanDataUri + hostScanData.id, JSON.stringify({hostScanData: hostScanData})).then((result) => {
            return result;
        }, (err) => {
            console.log(err);
            return [];
        });
    }

    getDirectoryList(host, username, password, path, parent, level) {
        return  this.securedPost(parameters.listDirectoryUri, JSON.stringify({host:host, username:username, password:password, path: path, parent, level})).then((result) => {
            return result.hasOwnProperty('items') ? result['items'] : false;
        }, (err) => {
            console.log(err);
            return [];
        });
    }

    terminateBackupScan(hostScanData) {
        if(!hostScanData.domain) hostScanData.domain = AuthenticationService.getUser().website;
        return  this.securedPost(parameters.backupScanTerminateUri + hostScanData.id, JSON.stringify({hostScanData: hostScanData})).then((result) => {
            return result;
        }, (err) => {
            console.log(err);
            return [];
        });
    }

    saveSettings(){
        return  this.securedPost(parameters.saveHostingSettingsUri).then((result) => {
            return result;
        }, (err) => {
            console.log(err);
            return [];
        });

    }

    getTariffs(){
        return this.securedPost(parameters.getTariffsUri).then((result) => {
            return result;
        }, (err) => {
            console.log(err);
            return [];
        });
    }

    post(type, credentials) {
        return new Promise((resolve, reject) => {
            this.http.post(parameters.apiUrl + type, JSON.stringify(credentials))
                .subscribe(res => {
                    resolve(res.json());
                }, (err) => {
                    reject(err);
                });
        });
    }

    securedPost(type, credentials = null) {
        return new Promise((resolve, reject) => {
            this.http.post(parameters.apiUrl + type + '?api_key=' + AuthenticationService.getUser().apiKey ,credentials)
                .subscribe(res => {
                    resolve(res.json());
                }, (err) => {
                    reject(err);
                });
        });
    }

    saveHostingSettings(hostingSettings: HostingSettings) {
        return  this.securedPost(parameters.saveHostingSettingsUri,JSON.stringify( {hostSettingsData: hostingSettings})).then((result) => {
            return result;
        }, (err) => {
            console.log(err);
            return [];
        });

    }

    updateSiteSettings(hostingSettings : HostingSettings) {
        return  this.securedPost(parameters.updateSiteSettingsUri,JSON.stringify( {hostSettingsData: hostingSettings})).then((result) => {
            return result;
        }, (err) => {
            console.log(err);
            return [];
        });

    }

    public requestTariff(data){
        return  this.securedPost(parameters.requestTariffUri,JSON.stringify( {tariff_data: data})).then((result) => {
            return result;
        }, (err) => {
            console.log(err);
            return [];
        });
    }

    public buy(data){
        return  this.securedPost(parameters.buyUri,JSON.stringify(data)).then((result) => {
            return result;
        }, (err) => {
            console.log(err);
            return {'status': false};
        });
    }

    static pay(amount, productId){
        return this.interkassaPay(amount, productId);
    }

    private static interkassaPay(amount, productId){
        window.location.href = parameters.apiUrl + parameters.payUri + '?api_key=' + AuthenticationService.getUser().apiKey + '&amount=' + amount + '&productId=' + productId + '&refirectUrl=' + parameters.interkassaReturnUrl;
    }

    private static cardinityPay(amount, productId){
        //window.location.href = parameters.interkassaPaymentUrl + '?pay_amount=' + amount + '&pay_product=' + productId + '&api_pay_url' + parameters.interkassaReturnUrl;
    }

    getDefaultMethod() {
        return  this.securedPost(parameters.defaultMethodUri).then((result) => {
            return result;
        }, (err) => {
            console.log(err);
            return [];
        });
    }

    getContentBlockData(uri, filter) {
        let data = filter ? {filter: filter} : {};

        return  this.securedPost(uri,JSON.stringify(data)).then((result) => {
            return result;
        }, (err) => {
            console.log(err);
            return [];
        });

    }
}
