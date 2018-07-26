import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {AuthenticationModule} from "./authentication/authentication.module";
import {BrowserModule} from "@angular/platform-browser";
// import {parameters} from "../parameters";
import {ConnectionWizardModule} from "./connection-wizard/connection-wizard.module";
import {RouterModule, Routes} from "@angular/router";
import {PanelComponent} from "./panel/panel.component";
import {DnsSettingsModule} from "./dns-settings/dns-settings.module";
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { FixedfileContentBlockComponent } from './fixedfile-content-block/fixedfile-content-block.component';
import {TicketModule} from "./ticket/ticket.module";
const routes:Routes = [
    { path: '', loadChildren: './authentication/authentication.module#AuthenticationModule'},
    { path: '', loadChildren: './ticket/ticket-module#TicketModule'},
    { path: '', loadChildren: './domain-details/domain-details.module#DomainDetailsModule'},
    { path: '', loadChildren: './connection-wizard/connection-wizard.module#ConnectionWizardModule'},
    { path: '', loadChildren: './dns-settings/dns-settings.module#DnsSettingsModule'},
    { path: '**', component: PageNotFoundComponent }
];

@NgModule({
    imports: [
        AuthenticationModule,
        ConnectionWizardModule,
        DnsSettingsModule,
        TicketModule,
        RouterModule.forRoot(routes),
        BrowserModule,
    ],
    declarations: [
        PanelComponent,
        AppComponent,
        PageNotFoundComponent,
        FixedfileContentBlockComponent
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