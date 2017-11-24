import { Component, Input, OnInit } from '@angular/core';

import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ReferencesService } from "./service/references.service";
import { NodeGroup } from "./node-group";

@Component({
	selector: 'wsr-group-selector',
	styleUrls: ['./group-selector.component.css'],
	template: `
	<div class="modal-header">
		<h4 class="modal-title">Group selection</h4>
		<button type="button" class="close" aria-label="Close" (click)="activeModal.dismiss()">
			<span aria-hidden="true">&times;</span>
		</button>
	</div>
	<div class="modal-body" >
		<div>Choose a group to differ same-subjects sites by IP-addresses <span class="info-sign" placement="bottom" ngbPopover="Vivamus sagittis lacus vel augue laoreet rutrum faucibus."></span></div>
		<br>
		<div class="clearfix">
		<div *ngFor="let groupItem of groups" class="group" (click)="onSelect(groupItem)" [class.selected]="group && groupItem.id == group.id">
			<div [ngClass]="['flag32', 'flag-' + referencesServiceClass.getCountryCode(groupItem.whoisCountry)]"></div>
			<div class="name">{{ getGroupName(groupItem) }}</div>
			<div class="comment">{{ getGroupComment(groupItem) }}</div>
		</div>
		</div>
	</div>
	<div class="modal-footer">
		<button type="button" class="btn btn-primary" (click)="activeModal.close(group)">Save</button>
		<button type="button" class="btn btn-default" (click)="activeModal.close(null)">Close</button>
	</div>
	`
})
export class GroupSelectorComponent implements OnInit
{
	groups: NodeGroup[];

	@Input()
	group: NodeGroup;

	referencesServiceClass = ReferencesService;

	constructor(
		private referencesService: ReferencesService,
		public activeModal: NgbActiveModal
	) {}

	public getGroups() {
		this.referencesService.getNodeGroups().then(groups => {this.groups = groups});
	}

	onSelect(group: NodeGroup): void {
		this.group = group;
	}

	ngOnInit(): void {
		this.getGroups();
	}

	private getGroupComment(group: NodeGroup): string {
		if ((group.whoisCountry === group.realCountry) && (group.whoisRegion === group.realRegion)){
			return 'Network ' + group.ownerId;
		} else {
			return 'Network ' + group.ownerId + '; location: ' + group.realCountry + ' / ' + group.realRegion;
		}
	}

	private getGroupName(group: NodeGroup): string {
		return group.whoisCountry + ' / ' + group.whoisRegion;
	}
}