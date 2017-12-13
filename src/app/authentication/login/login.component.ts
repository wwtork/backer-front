import {Component, Input, OnInit} from '@angular/core';
import {User} from "../user";
import {AuthenticationService} from "../authentication.service";
import {
    FormBuilder,
    FormGroup,
    Validators,
} from '@angular/forms';
import {ActivatedRoute} from "@angular/router";
@Component({
    selector: 'login-form',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

    public model:User;
    private form:FormGroup;

    private logout;
    private sub: any;

    ngOnInit() {
        this.sub = this.route.data
            .subscribe((data: { logout: boolean }) => {
                data.logout && localStorage.clear();
                this.model = new User();
                this.form = this.fb.group({
                    website: ['', Validators.required],
                    email: ['', Validators.required],
                    password: ['', Validators.required],
                    agreement: [false, Validators.requiredTrue]
                })
            });
    }

    ngOnDestroy() {
        this.sub.unsubscribe();
    }

    constructor(public authService: AuthenticationService, private fb:FormBuilder, private route: ActivatedRoute) {

    }

    onSubmit(form) {
        this.model.email = form.email;
        this.model.password = form.password;
        this.model.remember_me = form.rememberme;
        this.authService.login(this.model);
    }

}
