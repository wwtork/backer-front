import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { PanelComponent } from './panel/panel.component';
import { WindowComponent } from './window/window.component';
import {
    RouterModule,
    Routes
} from '@angular/router';
import { MethodComponent } from './method/method.component';
const routes:Routes = [
    {path: '', redirectTo: 'register', pathMatch: 'full'},
    {path: 'register', component: RegisterComponent},
    {path: 'login', component: LoginComponent},
    {path: 'method', component: MethodComponent}
];
@NgModule({
    declarations: [
        AppComponent,
        LoginComponent,
        RegisterComponent,
        PanelComponent,
        WindowComponent,
        MethodComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        RouterModule.forRoot(routes)
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {

}
