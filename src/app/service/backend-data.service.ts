import { Injectable } from '@angular/core';
import {Tariff} from "../model/tariff";
import {IBackendDataService} from "../interface/backend-data-service";
import {Method} from "../model/method";
import {User} from "../model/user";
import {Jsonp, Http, Headers} from '@angular/http';
import {AuthService} from "./auth.service";
import {HostingSettings} from "../model/hosting-settings";
import {arrayify} from "tslint/lib/utils";

const apiUrl = 'http://backer.local/app_dev.php/api/';
const GET_METHODS_URI = 'secured/get_methods';
const GET_TARIFFS_URI = 'secured/get_tariffs';
const USER_KEY = 'user';

@Injectable()
export class BackendDataService implements IBackendDataService {

    constructor(private http:Http) {
    }

    getUser():User{
        console.log(localStorage.getItem(USER_KEY));
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
}
