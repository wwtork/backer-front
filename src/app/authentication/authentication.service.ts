import { Injectable } from '@angular/core';
import { User } from "./user";
import { Router } from '@angular/router';
import {Http} from "@angular/http";
const USER_KEY = 'user';

import { parameters } from '../../parameters';
import {Ng4LoadingSpinnerService} from "ng4-loading-spinner";

@Injectable()
export class AuthenticationService {

    constructor(private router: Router, private http:Http, private spinnerService:Ng4LoadingSpinnerService){

    }

    errors:any;

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

    login(user:User, afterRegister = false) {
        this.spinnerService.show();
        return this.post('login', user.getSerialized()).then((result:Response) => {
            if(result.status){
                user = (afterRegister) ? Object.assign({},user, result['user']) : result['user'];
                AuthenticationService.setUser(user);
                this.spinnerService.hide();
                this.router.navigate([parameters.afterLoginUri]);
                return user;
            }else{
                this.spinnerService.hide();
                // this.errors = Object.keys(result["errorFields"]);
            }
            return false;
        }, (err) => {
            console.log(err);
            return false;
        });
    }
    
    register(user:User) {
        //return this.backendDataService.testpost();
        this.spinnerService.show();
        return this.post('register', user.getSerialized()).then((result:Response) => {
            if(result.status){
                AuthenticationService.setUser(user);
                this.login(user, true);
                return result;
            }
            else{
                this.errors = Object.keys(result["errorFields"]);
            }
            this.spinnerService.hide();
            return false;
        }, (err) => {
            this.spinnerService.hide();
            console.log('error');
            console.log(err);
            return false;
        });
    }

    static logout() {
        localStorage.removeItem(USER_KEY)
    }

    static setUser(user:User){
        localStorage.setItem(USER_KEY, JSON.stringify(user));
    }

    static getUser():User {
        let user = localStorage.getItem(USER_KEY);
        return user !== null ? new User().fillFromJSONString(user) : null;
    }

    static isLoggedIn() {
        return AuthenticationService.getUser() !== null;
    }
}
export const AUTH_PROVIDERS: Array<any> = [
    {provide: AuthenticationService, useClass: AuthenticationService}
];