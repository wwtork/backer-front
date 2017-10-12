import { Component, OnInit } from '@angular/core';
import { User } from "../model/user";
import {
    FormBuilder,
    FormGroup,
    Validators,
    AbstractControl
} from '@angular/forms';
import {AuthService} from "../service/auth.service";
@Component({
    selector: 'register-form',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

    model:User;
    submitted:boolean;
    complexity:string;
    show_password:boolean;
    form:FormGroup;
    private showpromo = false;

    constructor(private authService:AuthService, fb:FormBuilder) {
        localStorage.clear();
        this.show_password = false;
        this.submitted = false;
        this.complexity = '';

        this.model = new User();

        this.form = fb.group({
            website: ['', Validators.required],
            email: ['', Validators.required],
            password: ['', Validators.required],
            agreement: [false, Validators.requiredTrue]
        })
    }

    ngOnInit() {
    }

    togglePromo(){
        this.showpromo = !this.showpromo;
    }


    onSubmit(form) {
        this.model.email = form.email;
        this.model.password = form.password;
        this.model.remember_me = form.rememberme;
        this.authService.register(this.model);
    }

    showPassword() {
        this.show_password = !this.show_password;
    }

    getComplexityClass() {
        return this.complexity;
    }

    getComplexityText() {
        return this.complexity;
    }

    updateComplexity() {
        if (this.model.password)
            this.complexity = this.checkComplexity(this.model.password);
    }

    checkComplexity(pass) {
        var pass_length = pass.length;
        var count = 0;
        //var reg = "\!\"\:\?\\\%\?\;\|\/\=\-\+\_\(\)\*\#\@\$\^\&\.\,\[\]\{\}\'\`\~â„–";
        if (pass_length > 0 && pass_length <= 5) {
            count += 3;
            count *= 1;
        } else if (this.between(pass_length, 5, 8)) {
            count += 5;
            count += this.countsimbols(pass, pass_length);
            count *= 1.5;
        } else if (this.between(pass_length, 8, 12)) {
            count += 10;
            count += this.countsimbols(pass, pass_length);
            count *= 2;
        } else if (this.between(pass_length, 12, 17)) {
            count += 15;
            count += this.countsimbols(pass, pass_length);
            count *= 2.5;
        } else if (this.between(pass_length, 17, 20)) {
            count += 20;
            count += this.countsimbols(pass, pass_length);
            count *= 3;
        } else if (pass_length > 21) {
            count += 25;
            count += this.countsimbols(pass, pass_length);
            count *= 4;
        }
        if (count == 0) {
            return 'pswdno';
        } else if (this.between(count, 0, 40)) {
            return 'pswdweeker';
        } else if (this.between(count, 40, 80)) {
            return 'pswdweek';
        } else if (this.between(count, 80, 169)) {
            return 'pswdmedium';
        } else if (this.between(count, 169, 300)) {
            return 'pswdgood';
        } else if (this.between(count, 300, 500)) {
            return 'pswdstrong';
        } else if (this.between(count, 500, 900)) {
            return 'pswdstronger';
        }
    }

    between(c, n1, n2) {
        return c > n1 && c <= n2
    }

    countsimbols(pass, pass_length) {
        var count = 0;
        if (pass.match(/\d/)) {
            var i = pass_length - pass.replace(/\d/gm, '').length;
            count += 5;
            if (i >= 6)
                count += 10;
        }
        if (pass.match(/.[!,@,#,$,%,^,&,*,?,_,~]/)) {
            count += 8;
            var i = pass_length - pass.replace(/.[!,@,#,$,%,^,&,*,?,_,~]/gm, '').length;
            if (i >= 3)
                count += 20;
        }
        if (pass.match(/[a-zа-я]/)) {
            count += 5;
            var i = pass_length - pass.replace(/[a-zа-я]/gm, '').length;
            if (i >= 6)
                count += 10;
        }
        if (pass.match(/[A-ZА-Я]/)) {
            count += 5;
            var i = pass_length - pass.replace(/[A-ZА-Я]/gm, '').length;
            if (i >= 6)
                count += 10;
        }
        if (pass.match(/\d/) && pass.match(/.[!,@,#,$,%,^,&,*,?,_,~]/)) {
            count += 10;
        }
        if (pass.match(/\d/) && pass.match(/[a-zа-я]/)) {
            count += 8;
        }
        if (pass.match(/\d/) && pass.match(/[A-ZА-Я]/)) {
            count += 8;
        }
        if (pass.match(/[a-zа-я]/) && pass.match(/[A-ZА-Я]/)) {
            count += 6;
        }
        if (pass.match(/[a-zа-я]/) && pass.match(/.[!,@,#,$,%,^,&,*,?,_,~]/)) {
            count += 10;
        }
        if (pass.match(/[A-ZА-Я]/) && pass.match(/.[!,@,#,$,%,^,&,*,?,_,~]/)) {
            count += 10;
        }
        if (pass.match(/\d/) && pass.match(/[A-Za-zА-Яа-я]/)) {
            count += 10;
        }
        if (pass.match(/\d/) && pass.match(/.[!,@,#,$,%,^,&,*,?,_,~]/) && pass.match(/[a-zа-я]/)) {
            count += 15;
        }
        if (pass.match(/\d/) && pass.match(/.[!,@,#,$,%,^,&,*,?,_,~]/) && pass.match(/[A-ZА-Я]/)) {
            count += 15;
        }
        if (pass.match(/.[!,@,#,$,%,^,&,*,?,_,~]/) && pass.match(/[A-Za-zА-Яа-я]/)) {
            count += 15;
        }
        if (pass.match(/\d/) && pass.match(/[A-Za-zА-Яа-я]/) && pass.match(/.[!,@,#,$,%,^,&,*,?,_,~]/)) {
            count += 20;
        }
        return count;
    }


    get diagnostic() {
        return JSON.stringify(this.model) + this.complexity;
    }
}
