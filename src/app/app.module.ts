import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {AuthenticationModule} from "./authentication/authentication.module";
import {BrowserModule} from "@angular/platform-browser";
// import {parameters} from "../parameters";
import {ConnectionWizardModule} from "./connection-wizard/connection-wizard.module";
import {RouterModule, Routes} from "@angular/router";
import {PanelComponent} from "./panel/panel.component";
import {DnsSettingsModule} from "./dns-settings/dns-settings.module";
const routes:Routes = [
    { path: '', loadChildren: './authentication/authentication.module#AuthenticationModule'},
    { path: '', loadChildren: './connection-wizard/connection-wizard.module#ConnectionWizardModule'},
    { path: '', loadChildren: './dns-settings/dns-settings.module#DnsSettingsModule'}
];

@NgModule({
    imports: [
        AuthenticationModule,
        ConnectionWizardModule,
        DnsSettingsModule,
        RouterModule.forRoot(routes),
        BrowserModule,
    ],
    declarations: [
        PanelComponent,
        AppComponent,
    ],
    entryComponents: [],
    providers: [
        // DnsTestService,
        // {provide: 'wddListUrl', useValue: parameters.wddListUrl},
        // {provide: 'wddUpdateUrl', useValue: parameters.wddUpdateUrl}
    ],
    exports: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}