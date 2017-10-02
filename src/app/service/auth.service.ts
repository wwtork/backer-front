import { Injectable } from '@angular/core';
import { User } from "../model/user";
const USER_KEY = 'user';
@Injectable()
export class AuthService {

    login(user:User):boolean {
        if (user.email === 'user' && user.password === 'password') {
            localStorage.setItem(USER_KEY, JSON.stringify(user));
            return true;
        }

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