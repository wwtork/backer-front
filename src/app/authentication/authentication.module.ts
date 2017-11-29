import {NgModule} from '@angular/core';
import {LoginComponent} from './login/login.component';
import {RouterModule, Routes} from "@angular/router";
import {LoggedInGuard} from "./logged-in.guard";
import {AUTH_PROVIDERS} from "./authentication.service";
import {RegisterComponent} from "./register/register.component";
import {EmailConfirmationWarningComponent} from "./email-confirmation-warning/email-confirmation-warning.component";
import {FormsModule}   from '@angular/forms';
import {BrowserModule} from "@angular/platform-browser";
const authRoutes: Routes = [
    {path: 'register', component: RegisterComponent},
    {path: 'login', component: LoginComponent},
];

@NgModule({
    imports: [
        RouterModule.forChild(authRoutes),
        FormsModule,
        BrowserModule
    ],
    declarations: [
        LoginComponent,
        RegisterComponent,
        EmailConfirmationWarningComponent
    ],
    providers: [
        AUTH_PROVIDERS,
        LoggedInGuard
    ]
})
export class AuthenticationModule {

}