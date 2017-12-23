import { Injectable } from '@angular/core';
import {Http} from "@angular/http";
import {HostingSettings} from "./model/hosting-settings";
import { parameters } from 'parameters';
import {AuthenticationService} from "../authentication/authentication.service";
import {Site} from "./model/site";

const GET_METHODS_URI = 'secured/method/list';
const GET_TARIFFS_URI = 'secured/tariff/list';
const CHECK_ACCESS_URI = 'secured/check-hosting-access';
const SAVE_HOSTING_SETTINGS_URI = 'secured/save-hosting-settings';
const UPDATE_SITE_SETTINGS_URI = 'secured/update-site-settings';
// const USER_KEY = 'user';
const BACKUP_SCAN_DATA_URI = 'secured/backup_scan/status/';
const BACKUP_SCAN_TERMINATE_URI = 'secured/backup_scan/terminate/';
const BACKUP_START_SCAN_URI = 'secured/backup_scan/init';
const FIREWALL_SCAN_DATA_URI = 'secured/firewall_scan/status/';
const FIREWALL_START_SCAN_URI = 'secured/firewall_scan/init';
const LIST_DIRECTORY_URI = 'secured/backup_scan/list_dir/';

@Injectable()
export class BackendDataService {

    constructor(private http:Http) {

    }

    // getUser():User{
    //     return (new User).fillFromJSONString(localStorage.getItem(USER_KEY));
    // }

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

    startFirewallScan(fireScanData) {
        return  this.securedPost(FIREWALL_START_SCAN_URI, JSON.stringify({fireScanData: fireScanData})).then((result) => {
            return result;
        }, (err) => {
            console.log(err);
            return [];
        });
    }

    getFirewallScanData(fireScanData) {
        return  this.securedPost(FIREWALL_SCAN_DATA_URI + fireScanData.id, JSON.stringify({fireScanData: fireScanData})).then((result) => {
            return result;
        }, (err) => {
            console.log(err);
            return [];
        });
    }


    startBackupScan(hostScanData) {
        if(!hostScanData.domain) hostScanData.domain = AuthenticationService.getUser().website;
        return  this.securedPost(BACKUP_START_SCAN_URI, JSON.stringify({hostScanData: hostScanData})).then((result) => {
            return result;
        }, (err) => {
            console.log(err);
            return [];
        });
    }

    getBackupScanData(hostScanData) {
        if(!hostScanData.domain) hostScanData.domain = AuthenticationService.getUser().website;
        return  this.securedPost(BACKUP_SCAN_DATA_URI + hostScanData.id, JSON.stringify({hostScanData: hostScanData})).then((result) => {
            return result;
        }, (err) => {
            console.log(err);
            return [];
        });
    }

    getDirectoryList(serverId, path = null, needle_path = null) {
        return  this.securedPost(LIST_DIRECTORY_URI + serverId, JSON.stringify({path: path, needle_path: needle_path})).then((result) => {
            return result.hasOwnProperty('items') ? result['items'] : false;
        }, (err) => {
            console.log(err);
            return [];
        });
    }

    terminateBackupScan(hostScanData) {
        if(!hostScanData.domain) hostScanData.domain = AuthenticationService.getUser().website;
        return  this.securedPost(BACKUP_SCAN_TERMINATE_URI + hostScanData.id, JSON.stringify({hostScanData: hostScanData})).then((result) => {
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
        return  this.securedPost(SAVE_HOSTING_SETTINGS_URI,JSON.stringify( {hostSettingsData: hostingSettings})).then((result) => {
            return result;
        }, (err) => {
            console.log(err);
            return [];
        });

    }

    updateSiteSettings(hostingSettings : HostingSettings) {
        return  this.securedPost(UPDATE_SITE_SETTINGS_URI,JSON.stringify( {hostSettingsData: hostingSettings})).then((result) => {
            return result;
        }, (err) => {
            console.log(err);
            return [];
        });

    }

}
