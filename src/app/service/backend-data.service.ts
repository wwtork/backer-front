import { Injectable } from '@angular/core';
import {IBackendDataService} from "../interface/backend-data-service";
import {User} from "../model/user";
import {Http} from "@angular/http";
import {HostingSettings} from "../model/hosting-settings";

const apiUrl = 'http://backer.local/app_dev.php/api/';
const GET_METHODS_URI = 'secured/methods';
const GET_TARIFFS_URI = 'secured/tariffs';
const CHECK_ACCESS_URI = 'secured/check-hosting-access';
const SAVE_HOSTING_SETTINGS_URI = 'secured/save-hosting-settings';
const USER_KEY = 'user';
const BACKUP_SCAN_URI = 'secured/backup_scan_data';
const FIREWALL_SCAN_URI = 'secured/firewall_scan_data';

@Injectable()
export class BackendDataService implements IBackendDataService {

    constructor(private http:Http) {

    }

    getUser():User{
        return (new User).fillFromJSONString(localStorage.getItem(USER_KEY));
    }

    getMethods(){
        return  this.securedPost(GET_METHODS_URI).then((result) => {
            return result;
        }, (err) => {
            console.log(err);
            return [];
        });

    }

    checkAccess(hostAccessData){
        return  this.securedPost(CHECK_ACCESS_URI, JSON.stringify( {hostAccessData: hostAccessData})).then((result) => {
            return result;
        }, (err) => {
            console.log(err);
            return [];
        });
    }

    getBackupScanData(hostScanData) {
        console.log(this.getUser());
        if(!hostScanData.domainFilter) hostScanData.domainFilter = this.getUser().website;
        console.log(hostScanData);
        return  this.securedPost(BACKUP_SCAN_URI, JSON.stringify({hostScanData: hostScanData})).then((result) => {
            return result;
        }, (err) => {
            console.log(err);
            return [];
        });
    }

    saveSettings(){
        return  this.securedPost(SAVE_HOSTING_SETTINGS_URI).then((result) => {
            return result;
        }, (err) => {
            console.log(err);
            return [];
        });

    }

    getTariffs(){
        return this.securedPost(GET_TARIFFS_URI).then((result) => {
            return result;
        }, (err) => {
            console.log(err);
            return [];
        });
    }

    post(type, credentials) {
        return new Promise((resolve, reject) => {
            this.http.post(apiUrl + type, JSON.stringify(credentials))
                .subscribe(res => {
                    resolve(res.json());
                }, (err) => {
                    reject(err);
                });
        });
    }

    securedPost(type, credentials = null) {
        return new Promise((resolve, reject) => {
            this.http.post(apiUrl + type + '?api_key=' + this.getUser().apiKey ,credentials)
                .subscribe(res => {
                    resolve(res.json());
                }, (err) => {
                    reject(err);
                });
        });
    }



    getFirewallScanData(fireScanData) {
        return  this.securedPost(FIREWALL_SCAN_URI, {fireScanData: fireScanData}).then((result) => {
            return result;
        }, (err) => {
            console.log(err);
            return [];
        });
    }

    saveHostingSettings(hostingSettings: HostingSettings) {
        return  this.securedPost(SAVE_HOSTING_SETTINGS_URI,JSON.stringify( {hostSettingsData: hostingSettings})).then((result) => {
            return result;
        }, (err) => {
            console.log(err);
            return [];
        });

    }
}
