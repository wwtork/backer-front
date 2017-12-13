import { Component, Input, OnInit } from '@angular/core';

import { TreeviewComponent } from "ngx-treeview";
import { TreeviewItemComponent } from "ngx-treeview/src/treeview-item.component";

@Component({
	selector: 'wsr-treeview-item',
	styles: [`
		:host {
		        display: block;
		}
		:host .treeview-item {
		        white-space: nowrap;
		}

	`
	],
	template: `
		<div *ngIf="item" class="treeview-item">
			<ng-template [ngTemplateOutlet]="template" [ngTemplateOutletContext]="{level: level, treeItemId: treeItemId, index: index, total: total, item: item, onCollapseExpand: onCollapseExpand, onCheckedChange: onCheckedChange}">
			</ng-template>
			<div *ngIf="!item.collapsed && (item.children)" class="bbb">
				<wsr-treeview-item *ngFor="let child of item.children; let i = index"
				[config]="config"
				[index]="i"
				[total]="item.children.length"
				[item]="child"
				[level]="level + 1"
				[template]="template"
				(checkedChange)="onChildCheckedChange(child, $event)">
				</wsr-treeview-item>
			</div>
		</div>    
	`
})
export class WsrTreeViewItemComponent extends TreeviewItemComponent
{
	@Input()
	index: number;

	@Input()
	total: number;

	@Input()
	level: number;

	static id = 0;

	treeItemId = ++WsrTreeViewItemComponent.id;
}