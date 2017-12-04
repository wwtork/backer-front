import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {HttpModule, JsonpModule} from '@angular/http';

import {LoggedInGuard} from '../authentication/logged-in.guard';
import {
    RouterModule,
    Routes
} from '@angular/router';
import {
    NgbModule
} from '@ng-bootstrap/ng-bootstrap';
import {MethodComponent} from './method/method.component';
import {ConnectStateComponent} from './connect-state/connect-state.component';
import {ChooseTariffComponent} from './choose-tariff/choose-tariff.component';
import {DomainComponent} from './domain/domain.component';
import {FirewallActivationComponent} from './firewall-activation/firewall-activation.component';
import {HostingAccessComponent} from './hosting-access/hosting-access.component';
import {SslDownloadComponent} from './ssl-download/ssl-download.component';
import {SslCheckComponent} from './ssl-check/ssl-check.component';
import {AutoSetupComponent} from './auto-setup/auto-setup.component';
import {UpdateDnsComponent} from './update-dns/update-dns.component';
import {BackupActivationComponent} from './backup-activation/backup-activation.component';
import {ConnectWizardComponent} from './connect-wizard/connect-wizard.component';
import {TariffComponent} from './tariff/tariff.component';
import {BackendDataService} from "./backend-data.service";
import {HostingStateDirective} from './hosting-state.directive';
import {GlobalDataService} from "./global-data.service";
import {ChooseMethodComponent} from './choose-method/choose-method.component';
import {Ng4FilesModule} from 'angular4-files-upload/src/app/ng4-files';
import {ProgressBarComponent} from './progress-bar/progress-bar.component';
import {VideoBlockComponent} from './video-block/video-block.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {SelectFolderComponent} from './select-folder/select-folder.component';
import {BackupActivationErrorComponent} from './backup-activation-error/backup-activation-error.component';
import {IpErrorComponent} from './ip-error/ip-error.component';
import {DnsSettingsModule} from '../dns-settings/dns-settings.module';
import {DnsSettingsComponent} from './dns-settings/dns-settings.component';
import {BottomPanelModule} from "../bottom-panel/bottom-panel.module";
const connectionWizardRoutes: Routes = [
    {path: '', redirectTo: 'connection-wizard', pathMatch: 'full'},
    {path: 'connection-wizard', component: ConnectWizardComponent, canActivate: [LoggedInGuard]},
];
@NgModule({
    declarations: [
        MethodComponent,
        ConnectStateComponent,
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
        TariffComponent,
        HostingStateDirective,
        ChooseMethodComponent,
        ProgressBarComponent,
        VideoBlockComponent,
        SelectFolderComponent,
        BackupActivationErrorComponent,
        IpErrorComponent,
        DnsSettingsComponent
    ],
    imports: [
        DnsSettingsModule,
        BottomPanelModule,
        CommonModule,
        FormsModule,
        HttpModule,
        JsonpModule,
        Ng4FilesModule,
        RouterModule.forChild(connectionWizardRoutes),
        FormsModule,
        ReactiveFormsModule,
        NgbModule.forRoot(),
    ],
    providers: [
        LoggedInGuard,
        BackendDataService,
        GlobalDataService
    ],
    bootstrap: [],
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
        ChooseMethodComponent,
        IpErrorComponent,
        BackupActivationErrorComponent,
        DnsSettingsComponent,
    ],
})

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [DnsSettingsComponent]
})
export class ConnectionWizardModule {
}
