import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TreeviewModule} from "ngx-treeview";

import { WsrTreeViewComponent } from "./wsr-treeview.component";
import { WsrTreeViewItemComponent } from "./wsr-treeview-item.component";

@NgModule({
	imports: [
		TreeviewModule.forRoot(),
		CommonModule,
		FormsModule,
	],
	declarations: [
		WsrTreeViewComponent,
		WsrTreeViewItemComponent
	],
	entryComponents: [

	],
	providers: [

	],
	exports: [
		WsrTreeViewComponent,
	],
	bootstrap: [

	]
})
export class WsrTreeViewModule {}
