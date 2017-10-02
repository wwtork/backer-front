import { Component, OnInit } from '@angular/core';
import {User} from "../model/user";
import {AuthService} from "../service/auth.service";

@Component({
    selector: 'login-form',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

    username:string;
    password:string;
    rememberme:boolean = true;

    constructor(public authService: AuthService) {
    }

    onSubmit(form) {
        let user:User = new User();
        user.email = form.email;
        user.password = form.password;
        user.remember_me = form.rememberme;

        this.authService.login(user);
    }

    ngOnInit() {
    }

}
