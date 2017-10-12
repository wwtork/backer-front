import { Injectable } from '@angular/core';
import { User } from "../model/user";
import { Router } from '@angular/router';
import {BackendDataService} from "./backend-data.service";
const USER_KEY = 'user';
@Injectable()
export class AuthService {

    public lastError:string;

    constructor(private backendDataService: BackendDataService, private router: Router){

    }

    login(user:User):boolean {
        this.backendDataService.post('login', user.getSerialized()).then((result:Response) => {
            if(result.status){
                user.apiKey = result['apiKey'];
                localStorage.setItem(USER_KEY, JSON.stringify(user));
                this.router.navigate(['/connection-wizard']);
                return result;
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
                localStorage.setItem(USER_KEY, JSON.stringify(user));
                this.login(user);
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