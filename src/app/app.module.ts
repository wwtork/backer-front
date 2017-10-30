import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule, JsonpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { PanelComponent } from './panel/panel.component';
import { AUTH_PROVIDERS } from './service/auth.service';
import { LoggedInGuard } from './logged-in.guard';
import {
    RouterModule,
    Routes
} from '@angular/router';
import {
    NgbModule
} from '@ng-bootstrap/ng-bootstrap';
import { MethodComponent } from './method/method.component';
import { UserComponent } from './user/user.component';
import { ConnectStateComponent } from './connect-state/connect-state.component';
import { EmailConfirmationWarningComponent } from './email-confirmation-warning/email-confirmation-warning.component';
import { ChooseTariffComponent } from './choose-tariff/choose-tariff.component';
import { DomainComponent } from './domain/domain.component';
import { FirewallActivationComponent } from './firewall-activation/firewall-activation.component';
import { HostingAccessComponent } from './hosting-access/hosting-access.component';
import { SslDownloadComponent } from './ssl-download/ssl-download.component';
import { SslCheckComponent } from './ssl-check/ssl-check.component';
import { AutoSetupComponent } from './auto-setup/auto-setup.component';
import { UpdateDnsComponent } from './update-dns/update-dns.component';
import { BackupActivationComponent } from './backup-activation/backup-activation.component';
import { ConnectWizardComponent } from './connect-wizard/connect-wizard.component';
import { EmergencyHelpComponent } from './emergency-help/emergency-help.component';
import { InstructionComponent } from './instruction/instruction.component';
import { TariffComponent } from './tariff/tariff.component';
import {BackendDataService} from "./service/backend-data.service";
import { HostingStateDirective } from './hosting-state.directive';
import {GlobalDataService} from "./service/global-data.service";
import { ChooseMethodComponent } from './choose-method/choose-method.component';
import { Ng4FilesModule } from 'angular4-files-upload/src/app/ng4-files';
import { ProgressBarComponent } from './progress-bar/progress-bar.component';
import { VideoBlockComponent } from './video-block/video-block.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SelectFolderComponent } from './select-folder/select-folder.component';
import { BackupActivationErrorComponent } from './backup-activation-error/backup-activation-error.component';
import { IpErrorComponent } from './ip-error/ip-error.component';
//const childRoutes:Routes = [
//    {path: '', redirectTo: 'domain', pathMatch: 'full'},
//    {path: 'domain', component: DomainComponent },
//    {path: 'firewall-activation', component: FirewallActivationComponent },
//    {path: 'ssl-check', component: SslCheckComponent },
//    {path: 'ssl-download', component: SslDownloadComponent },
//    {path: 'update-dns', component: UpdateDnsComponent },
//    {path: 'auto-setup', component: AutoSetupComponent },
//    {path: 'hosting-access', component: HostingAccessComponent },
//    {path: 'choose-tariff', component: ChooseTariffComponent },
//    {path: 'backup-activation', component: BackupActivationComponent }
//];
const routes:Routes = [
    {path: '', redirectTo: 'connection-wizard', pathMatch: 'full'},
    {path: 'register', component: RegisterComponent},
    {path: 'login', component: LoginComponent},
    {path: 'connection-wizard', component: ConnectWizardComponent, canActivate: [ LoggedInGuard ]}
];
@NgModule({
    declarations: [
        AppComponent,
        LoginComponent,
        RegisterComponent,
        PanelComponent,
        MethodComponent,
        UserComponent,
        ConnectStateComponent,
        EmailConfirmationWarningComponent,
        ChooseTariffComponent,
        DomainComponent,
        FirewallActivationComponent,
        HostingAccessComponent,
        SslDownloadComponent,
        SslCheckComponent,
        AutoSetupComponent,
        UpdateDnsComponent,
        BackupActivationComponent,
        ConnectWizardComponent,
        EmergencyHelpComponent,
        InstructionComponent,
        TariffComponent,
        HostingStateDirective,
        ChooseMethodComponent,
        ProgressBarComponent,
        VideoBlockComponent,
        SelectFolderComponent,
        BackupActivationErrorComponent,
        IpErrorComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        JsonpModule,
        Ng4FilesModule,
        RouterModule.forRoot(routes),
        FormsModule,
        ReactiveFormsModule,
        NgbModule.forRoot()
    ],
    providers: [
        AUTH_PROVIDERS,
        LoggedInGuard,
        BackendDataService,
        GlobalDataService
    ],
    bootstrap: [AppComponent],
    entryComponents: [
        DomainComponent,
        FirewallActivationComponent,
        SslCheckComponent,
        SslDownloadComponent,
        UpdateDnsComponent,
        AutoSetupComponent,
        HostingAccessComponent,
        ChooseTariffComponent,
        BackupActivationComponent,
        ChooseMethodComponent
    ],
})
export class AppModule {

}
