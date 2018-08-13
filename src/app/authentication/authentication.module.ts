import {NgModule} from '@angular/core';
import {LoginComponent} from './login/login.component';
import {RouterModule, Routes} from "@angular/router";
import {LoggedInGuard} from "./logged-in.guard";
import {AUTH_PROVIDERS} from "./authentication.service";
import {RegisterComponent} from "./register/register.component";
import {EmailConfirmationWarningComponent} from "./email-confirmation-warning/email-confirmation-warning.component";
import {FormsModule}   from '@angular/forms';
import {CommonModule} from "@angular/common";
import {Ng4LoadingSpinnerModule} from "ng4-loading-spinner";
import {PanelComponent} from "../panel/panel.component";
import {ConnectionWizardModule} from "../connection-wizard/connection-wizard.module";
import {TicketModule} from "../ticket/ticket.module";
// import {BrowserModule} from "@angular/platform-browser";
const authRoutes: Routes = [
    {path: 'register', component: RegisterComponent},
    {path: 'login', component: LoginComponent, data: {logout: false}},
    {path: 'logout', component: LoginComponent, data: {logout: true}}
];

@NgModule({
    imports: [
        RouterModule.forChild(authRoutes),
        FormsModule,
        CommonModule,
        Ng4LoadingSpinnerModule.forRoot()
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