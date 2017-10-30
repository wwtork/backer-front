import { Injectable } from '@angular/core';
import { User } from "../model/user";
import { Router } from '@angular/router';
import {BackendDataService} from "./backend-data.service";
import {HostingSettings} from "../model/hosting-settings";
import {after} from "selenium-webdriver/testing";
const USER_KEY = 'user';
const HOSTING_SETTINGS_KEY = 'hosting_settings';
@Injectable()
export class AuthService {

    public lastError:string;

    constructor(private backendDataService: BackendDataService, private router: Router){

    }

    login(user:User, afterRegister = false):boolean {

        if(afterRegister) {
            let hs = new HostingSettings();
            hs.stage = 'choose-tariff';
            hs.domain = user.website;
            localStorage.set(HOSTING_SETTINGS_KEY, JSON.stringify(hs));
        }

        this.backendDataService.post('login', user.getSerialized()).then((result:Response) => {
            if(result.status){
                user = result['user'];
                this.setUser(user);

                this.router.navigate(['/connection-wizard']);
                return user;
            }
            return false;
        }, (err) => {
            console.log(err);
            return false;
        });

        return false;
    }
    
    register(user:User):boolean {
        //return this.backendDataService.testpost();
        this.backendDataService.post('register', user.getSerialized()).then((result:Response) => {
            if(result.status){
                this.setUser(user);
                this.login(user, true);
                return result;
            }
            return false;
        }, (err) => {
            console.log('error');
            console.log(err);
            return false;
        });

        return false;
    }

    logout() {
        localStorage.removeItem(USER_KEY)
    }

    setUser(user:User){
        localStorage.setItem(USER_KEY, JSON.stringify(user));
    }

    getUser():User {
        var user = localStorage.getItem(USER_KEY);
        return user !== null ? JSON.parse(user) : null;
    }

    isLoggedIn() {
        return this.getUser() !== null;
    }
}
export const AUTH_PROVIDERS: Array<any> = [
    {provide: AuthService, useClass: AuthService}
];