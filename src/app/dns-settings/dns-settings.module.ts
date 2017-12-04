import { NgModule } from '@angular/core';
// import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AccordionModule } from 'ngx-bootstrap';
import { ModalModule } from 'ngx-bootstrap';
import { NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common';
import { ResourceRecordListComponent } from './resource-record-list/resource-record-list.component';
import { ResourceRecordMxComponent } from "./resource-record-component/resource-record-mx.component";
import { ResourceRecordSoaComponent } from "./resource-record-component/resource-record-soa.component";
import { ResourceRecordAComponent } from "./resource-record-component/resource-record-a.component";
import { ResourceRecordSrvComponent } from "./resource-record-component/resource-record-srv.component";
import { ResourceRecordTxtComponent } from "./resource-record-component/resource-record-txt.component";

import { PopoverSelectTtlComponent } from "./select/popover-select-ttl.component";
import { ResourceRecordModalContentComponent } from "./resource-record-modal-content/resource-record-modal-content.component";
import { RemoveConfirmationComponent } from "./remove-confirmation/remove-confirmation.component";
import { PopoverSelectComponent } from "./select/popover-select.component";
import { DomainCdnSettingComponent } from "./domain-cdn-setting/domain-cdn-setting.component";
import { GroupSelectorComponent } from "./group-selector/group-selector.component";
import { RegionSelectorComponent } from "./region-selector/region-selector.component";
import { FormHostDirective } from './form-host.directive';
import { ReferencesService } from "./service/references.service";
import { ResourceRecordsConverterService } from "./service/resource-record-converter.service";
import { SelectComponent } from "./select/select.component";
import { WsrTreeViewModule } from "../wsr-treeview/wsr-treeview.module";
import { HttpModule } from "@angular/http";
import { ResourceRecordNsComponent } from "./resource-record-component/resource-record-ns.component";
import { ResourceRecordCnameComponent } from "./resource-record-component/resource-record-cname.component";
import { ResourceRecordAaaaComponent } from "./resource-record-component/resource-record-aaaa.component";
import { parameters } from "../../parameters";
import { ResourceRecordCaaComponent } from "./resource-record-component/resource-record-caa.component";
import { ReactiveSelectComponent } from "./select/reactive-select.component";

@NgModule({
	imports: [
		AccordionModule.forRoot(),
		ModalModule.forRoot(),
		NgbModule.forRoot(),
		WsrTreeViewModule,
		CommonModule,
		FormsModule,
		ReactiveFormsModule,
		HttpModule,
	],
	declarations: [
		ResourceRecordListComponent,
		ResourceRecordMxComponent,
		ResourceRecordSoaComponent,
		ResourceRecordAComponent,
		ResourceRecordSrvComponent,
		ResourceRecordAaaaComponent,
		ResourceRecordCnameComponent,
		ResourceRecordNsComponent,
		ResourceRecordTxtComponent,
		ResourceRecordCaaComponent,
		FormHostDirective,
		ResourceRecordModalContentComponent,
		RemoveConfirmationComponent,
		PopoverSelectComponent,
		DomainCdnSettingComponent,
		GroupSelectorComponent,
		RegionSelectorComponent,
		PopoverSelectTtlComponent,
		SelectComponent,
		ReactiveSelectComponent
	],
	entryComponents: [
		ResourceRecordModalContentComponent,
		ResourceRecordSrvComponent,
		ResourceRecordMxComponent,
		ResourceRecordSoaComponent,
		ResourceRecordAComponent,
		ResourceRecordAaaaComponent,
		ResourceRecordCnameComponent,
		ResourceRecordNsComponent,
		ResourceRecordTxtComponent,
		ResourceRecordCaaComponent,
		GroupSelectorComponent,
		RegionSelectorComponent,
	],
	providers: [
		ReferencesService,
		ResourceRecordsConverterService,
		{provide: 'nodeIpsUrl', useValue: parameters.nodeIpsUrl}
	],
	exports: [
		ResourceRecordListComponent,
	],
	bootstrap: [

	]
})
export class DnsSettingsModule {}
