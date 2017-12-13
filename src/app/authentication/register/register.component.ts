import { Component, OnInit } from '@angular/core';
import { User } from "../user";
import {
    FormBuilder,
    FormGroup,
    Validators
} from '@angular/forms';
import {AuthenticationService} from "../authentication.service";
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
    showpromo = false;
    errors;

    constructor(private authService:AuthenticationService, fb:FormBuilder) {
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
        this.model.website = form.website;
        this.model.agreement = form.agreement;
        this.authService.register(this.model).then((result) => {
            this.errors = this.authService.errors;
            for(let i in this.errors){
                if(this.model.hasOwnProperty(this.errors[i]))
                    this.model[this.errors[i]].valid = false;
            }
        });
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
            this.complexity = RegisterComponent.checkComplexity(this.model.password);
    }

    static checkComplexity(pass) {
        let pass_length = pass.length;
        let count = 0;
        //var reg = "\!\"\:\?\\\%\?\;\|\/\=\-\+\_\(\)\*\#\@\$\^\&\.\,\[\]\{\}\'\`\~â„–";
        if (pass_length > 0 && pass_length <= 5) {
            count += 3;
            count *= 1;
        } else if (RegisterComponent.between(pass_length, 5, 8)) {
            count += 5;
            count += RegisterComponent.countsimbols(pass, pass_length);
            count *= 1.5;
        } else if (RegisterComponent.between(pass_length, 8, 12)) {
            count += 10;
            count += RegisterComponent.countsimbols(pass, pass_length);
            count *= 2;
        } else if (RegisterComponent.between(pass_length, 12, 17)) {
            count += 15;
            count += RegisterComponent.countsimbols(pass, pass_length);
            count *= 2.5;
        } else if (RegisterComponent.between(pass_length, 17, 20)) {
            count += 20;
            count += RegisterComponent.countsimbols(pass, pass_length);
            count *= 3;
        } else if (pass_length > 21) {
            count += 25;
            count += RegisterComponent.countsimbols(pass, pass_length);
            count *= 4;
        }
        if (count == 0) {
            return 'pswdno';
        } else if (RegisterComponent.between(count, 0, 40)) {
            return 'pswdweeker';
        } else if (RegisterComponent.between(count, 40, 80)) {
            return 'pswdweek';
        } else if (RegisterComponent.between(count, 80, 169)) {
            return 'pswdmedium';
        } else if (RegisterComponent.between(count, 169, 300)) {
            return 'pswdgood';
        } else if (RegisterComponent.between(count, 300, 500)) {
            return 'pswdstrong';
        } else if (RegisterComponent.between(count, 500, 900)) {
            return 'pswdstronger';
        }
    }

    static between(c, n1, n2) {
        return c > n1 && c <= n2
    }

    static countsimbols(pass, pass_length) {
        let i;
        let count = 0;
        if (pass.match(/\d/)) {
            let i = pass_length - pass.replace(/\d/gm, '').length;
            count += 5;
            if (i >= 6)
                count += 10;
        }
        if (pass.match(/.[!,@$%^&*?_~]/)) {
            count += 8;
            i = pass_length - pass.replace(/.[!,@$%^&*?_~]/gm, '').length;
            if (i >= 3)
                count += 20;
        }
        if (pass.match(/[a-zа-я]/)) {
            count += 5;
            i = pass_length - pass.replace(/[a-zа-я]/gm, '').length;
            if (i >= 6)
                count += 10;
        }
        if (pass.match(/[A-ZА-Я]/)) {
            count += 5;
            i = pass_length - pass.replace(/[A-ZА-Я]/gm, '').length;
            if (i >= 6)
                count += 10;
        }
        if (pass.match(/\d/) && pass.match(/.[!,@$%^&*?_~]/)) {
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
        if (pass.match(/[a-zа-я]/) && pass.match(/.[!,@$%^&*?_~]/)) {
            count += 10;
        }
        if (pass.match(/[A-ZА-Я]/) && pass.match(/.[!,@#$%^&*?_~]/)) {
            count += 10;
        }
        if (pass.match(/\d/) && pass.match(/[A-Za-zА-Яа-я]/)) {
            count += 10;
        }
        if (pass.match(/\d/) && pass.match(/.[!,@$%^&*?_~]/) && pass.match(/[a-zа-я]/)) {
            count += 15;
        }
        if (pass.match(/\d/) && pass.match(/.[!,@$%^&*?_~]/) && pass.match(/[A-ZА-Я]/)) {
            count += 15;
        }
        if (pass.match(/.[!,@$%^&*?_~]/) && pass.match(/[A-Za-zА-Яа-я]/)) {
            count += 15;
        }
        if (pass.match(/\d/) && pass.match(/[A-Za-zА-Яа-я]/) && pass.match(/.[!,@$%^&*?_~]/)) {
            count += 20;
        }
        return count;
    }
}
