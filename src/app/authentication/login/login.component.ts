import { Component, OnInit } from '@angular/core';
import {User} from "../user";
import {AuthenticationService} from "../authentication.service";
import {
    FormBuilder,
    FormGroup,
    Validators,
} from '@angular/forms';
@Component({
    selector: 'login-form',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

    private model:User;
    private form:FormGroup;

    constructor(public authService: AuthenticationService, fb:FormBuilder) {
        localStorage.clear();
        this.model = new User();
        this.form = fb.group({
            website: ['', Validators.required],
            email: ['', Validators.required],
            password: ['', Validators.required],
            agreement: [false, Validators.requiredTrue]
        })
    }

    onSubmit(form) {
        this.model.email = form.email;
        this.model.password = form.password;
        this.model.remember_me = form.rememberme;
        this.authService.login(this.model);
    }

    ngOnInit() {
    }

}