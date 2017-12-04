import { Component, Input, OnInit } from '@angular/core';

import { TreeviewComponent, TreeviewI18n, TreeviewConfig, TreeviewEventParser } from "ngx-treeview";
import { ReferencesService } from "../dns-settings/service/references.service";

@Component({
	selector: 'wsr-treeview',
	styleUrls: ['./wsr-treeview.component.css'],
	template: `
		<ng-template #defaultItemTemplate
		    let-index="index"
		    let-total="total"
		    let-item="item"
		    let-treeItemId="treeItemId"
		    let-level="level"
		    let-onCollapseExpand="onCollapseExpand"
		    let-onCheckedChange="onCheckedChange"
		>
			<div class="form-check1"
			    [class.single]="total==1"
			    [class.first]="total>1 && index==0"
			    [class.last]="total>1 && index==total-1"
			    [class.opened]="!item.collapsed && item.children"
			    [class.closed]="item.collapsed && item.children">
				<i *ngIf="item.children" (click)="onCollapseExpand()" aria-hidden="true" class="fa" [class.fa-caret-right]="item.collapsed" [class.fa-caret-down]="!item.collapsed"></i>
				<input type="checkbox" class="form-check-input form-control" [attr.id]="'treeview-checkbox-' + treeId + '-' + treeItemId" [(ngModel)]="item.checked" (ngModelChange)="onCheckedChange()" [disabled]="item.disabled" [indeterminate]="item.indeterminate" />
				<label class="form-check-label" [attr.for]="'treeview-checkbox-' + treeId + '-' + treeItemId">
				</label><span class="node-name" [class.country-name]="level==0"><span *ngIf="level==0" [ngClass]="['flag24', 'flag-' + referencesServiceClass.getCountryCode(item.text)]"></span>{{ item.text }}</span>
			</div>
		</ng-template>

		<ng-template #defaultHeaderTemplate let-config="config" let-item="item" let-onCollapseExpand="onCollapseExpand" let-onCheckedChange="onCheckedChange" let-onFilterTextChange="onFilterTextChange">

		</ng-template>

		<div class="treeview-header">
			<ng-template [ngTemplateOutlet]="headerTemplate || defaultHeaderTemplate" [ngOutletContext]="headerTemplateContext">
			</ng-template>
		</div>
		
		<div [ngSwitch]="hasFilterItems">
			<div *ngSwitchCase="true" class="treeview-container" [style.max-height.px]="maxHeight">
				<wsr-treeview-item *ngFor="let item of filterItems; let i = index"
					[index]="i"
					[total]="filterItems.length"
					[config]="config"
					[item]="item"
					[level]="0"
					[template]="itemTemplate || defaultItemTemplate"
					(checkedChange)="onItemCheckedChange(item, $event)"
				>
				</wsr-treeview-item>
			</div>
			<div *ngSwitchCase="false" class="treeview-text">
				{{i18n.getFilterNoItemsFoundText()}}
			</div>
		</div>
	`
})
export class WsrTreeViewComponent extends TreeviewComponent
{
	static id = 0;

	private treeId = ++WsrTreeViewComponent.id;

	private referencesServiceClass = ReferencesService;
}