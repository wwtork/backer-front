import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {HttpModule, JsonpModule} from '@angular/http';
import { Ng4LoadingSpinnerModule } from 'ng4-loading-spinner';
import {LoggedInGuard} from '../authentication/logged-in.guard';
import {Ng2DirectoryTreeModule} from '../ngx-directory-tree'
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
import {BackendDataService} from "../backend-data.service";
import {HostingStateDirective} from './hosting-state.directive';
import {GlobalDataService} from "./global-data.service";
import {ChooseMethodComponent} from './choose-method/choose-method.component';
import {ProgressBarComponent} from './progress-bar/progress-bar.component';
import {VideoBlockComponent} from './video-block/video-block.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {SelectFolderComponent} from './select-folder/select-folder.component';
import {BackupActivationErrorComponent} from './backup-activation-error/backup-activation-error.component';
import {IpErrorComponent} from './ip-error/ip-error.component';
import {DnsSettingsModule} from '../dns-settings/dns-settings.module';
import {DnsSettingsComponent} from './dns-settings/dns-settings.component';
import {BottomPanelModule} from "../bottom-panel/bottom-panel.module";
import { WsrTreeViewModule } from "../wsr-treeview/wsr-treeview.module";
import { FtpErrorModalComponent } from './ftp-error-modal/ftp-error-modal.component';
import { FreeTariffModalComponent } from './free-tariff-modal/free-tariff-modal.component';
import { BuyTariffModalComponent } from './buy-tariff-modal/buy-tariff-modal.component';
import { RequestTariffModalComponent } from './request-tariff-modal/request-tariff-modal.component';
import { ModalComponent } from './modal/modal.component';
import { ModalDirective } from './modal.directive';
import { DirectoryListNodeComponent } from './directory-list-node/directory-list-node.component';
import { DirectoryListComponent } from './directory-list/directory-list.component';
const connectionWizardRoutes: Routes = [
    {path: '', redirectTo: 'connection-wizard', pathMatch: 'full'},
    {path: 'connection-wizard', component: ConnectWizardComponent, canActivate: [LoggedInGuard]},
];
@NgModule({
    imports: [
        DnsSettingsModule,
        BottomPanelModule,
        WsrTreeViewModule,
        Ng2DirectoryTreeModule,
        CommonModule,
        FormsModule,
        HttpModule,
        JsonpModule,
        RouterModule.forChild(connectionWizardRoutes),
        FormsModule,
        ReactiveFormsModule,
        NgbModule.forRoot(),
        Ng4LoadingSpinnerModule.forRoot()
    ],
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
        ModalComponent,
        TariffComponent,
        HostingStateDirective,
        ChooseMethodComponent,
        ProgressBarComponent,
        VideoBlockComponent,
        SelectFolderComponent,
        BackupActivationErrorComponent,
        IpErrorComponent,
        DnsSettingsComponent,
        FtpErrorModalComponent,
        FreeTariffModalComponent,
        BuyTariffModalComponent,
        RequestTariffModalComponent,
        ModalComponent,
        FtpErrorModalComponent,
        RequestTariffModalComponent,
        FreeTariffModalComponent,
        BuyTariffModalComponent,
        ModalDirective,
        DirectoryListNodeComponent,
        DirectoryListComponent
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
        FtpErrorModalComponent,
        ModalComponent,
        RequestTariffModalComponent,
        FreeTariffModalComponent,
        BuyTariffModalComponent
    ],
})

export class ConnectionWizardModule {
}
