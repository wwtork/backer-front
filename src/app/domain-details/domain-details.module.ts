import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilterBlockComponent } from './filter-block/filter-block.component';
import { ContentBlockComponent } from './content-block/content-block.component';
import { BackupFilterBlockComponent } from './backup-filter-block/backup-filter-block.component';
import { FileBackupContentBlockComponent } from './file-backup-content-block/file-backup-content-block.component';
import { DbBackupContentBlockComponent } from './db-backup-content-block/db-backup-content-block.component';
import { NewBackupContentBlockComponent } from './new-backup-content-block/new-backup-content-block.component';
import {RouterModule, Routes} from "@angular/router";
import {LoggedInGuard} from "../authentication/logged-in.guard";
import { DomainDetailsComponent } from './domain-details/domain-details.component';
import {Ng4LoadingSpinnerModule} from "ng4-loading-spinner";
import {BackendDataService} from "../backend-data.service";
import {GlobalDataService} from "../connection-wizard/global-data.service";
import {FilterEventService} from "./filter-event.service";
import { SpeedFilterBlockComponent } from './speed-filter-block/speed-filter-block.component';
import { CachedDynamicResponseContentBlockComponent } from './cached-dynamic-response-content-block/cached-dynamic-response-content-block.component';
import { CachedStaticResponseContentBlockComponent } from './cached-static-response-content-block/cached-static-response-content-block.component';
import { ChartContentBlockComponent } from './chart-content-block/chart-content-block.component';
import { LoadSpeedContentBlockComponent } from './load-speed-content-block/load-speed-content-block.component';
import { AcceleratedRequestsContentBlockComponent } from './accelerated-requests-content-block/accelerated-requests-content-block.component';
import { ReliabilityFilterBlockComponent } from './reliability-filter-block/reliability-filter-block.component';
import { HostingErrorsContentBlockComponent } from './hosting-errors-content-block/hosting-errors-content-block.component';
import { FixedWebsiteContentBlockComponent } from './fixed-website-content-block/fixed-website-content-block.component';
import { MonitoringContentBlockComponent } from './monitoring-content-block/monitoring-content-block.component';
import { SslContentBlockComponent } from './ssl-content-block/ssl-content-block.component';
import { SafetyFilterBlockComponent } from './safety-filter-block/safety-filter-block.component';
import { BlockedRequestsContentBlockComponent } from './blocked-requests-content-block/blocked-requests-content-block.component';
import { ChangesControlContentBlockComponent } from './changes-control-content-block/changes-control-content-block.component';
import { InnerAntivirusContentBlockComponent } from './inner-antivirus-content-block/inner-antivirus-content-block.component';
import { WebscanContentBlockComponent } from './webscan-content-block/webscan-content-block.component';
import { MessagesFilterBlockComponent } from './messages-filter-block/messages-filter-block.component';
import { MessagesContentBlockComponent } from './messages-content-block/messages-content-block.component';
import { AlertsContentBlockComponent } from './alerts-content-block/alerts-content-block.component';
import { PercentCircleDirective } from './percent-circle.directive';
import { FixedfileContentBlockComponent } from './fixedfile-content-block/fixedfile-content-block.component';
import { FirecdnContentBlockComponent } from './firecdn-content-block/firecdn-content-block.component';
import { BackupIntervalContentBlockComponent } from './backup-interval-content-block/backup-interval-content-block.component';
import { NofilterContentBlockComponent } from './nofilter-content-block/nofilter-content-block.component';
import { NofilterBlockComponent } from './nofilter-block/nofilter-block.component';
import {ObjectKeysPipe} from "../object-keys.pipe";
import { DomainNavigationComponent } from './domain-navigation/domain-navigation.component';
import {FilterKeysPipe} from "../filter-keys.pipe";

const domainDetailsRoutes: Routes = [
  {path: 'domain-details/:siteId', component: DomainDetailsComponent, canActivate: [LoggedInGuard]}
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(domainDetailsRoutes),
    Ng4LoadingSpinnerModule.forRoot()
  ],
  providers: [
    LoggedInGuard,
    BackendDataService,
    GlobalDataService
  ],
  declarations: [
    FilterBlockComponent,
    ContentBlockComponent,
    BackupFilterBlockComponent,
    FileBackupContentBlockComponent,
    DbBackupContentBlockComponent,
    NewBackupContentBlockComponent,
    DomainDetailsComponent,
    SpeedFilterBlockComponent,
    CachedDynamicResponseContentBlockComponent,
    CachedStaticResponseContentBlockComponent,
    ChartContentBlockComponent,
    LoadSpeedContentBlockComponent,
    AcceleratedRequestsContentBlockComponent,
    ReliabilityFilterBlockComponent,
    HostingErrorsContentBlockComponent,
    FixedWebsiteContentBlockComponent,
    MonitoringContentBlockComponent,
    SslContentBlockComponent,
    SafetyFilterBlockComponent,
    BlockedRequestsContentBlockComponent,
    ChangesControlContentBlockComponent,
    InnerAntivirusContentBlockComponent,
    WebscanContentBlockComponent,
    MessagesFilterBlockComponent,
    MessagesContentBlockComponent,
    AlertsContentBlockComponent,
    PercentCircleDirective,
    FixedfileContentBlockComponent,
    FirecdnContentBlockComponent,
    BackupIntervalContentBlockComponent,
    NofilterContentBlockComponent,
    NofilterBlockComponent,
      ObjectKeysPipe,
      DomainNavigationComponent,
      FilterKeysPipe
  ]
})
export class DomainDetailsModule { }
