import { Component, Input, OnInit } from '@angular/core';

import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ReferencesService } from "../service/references.service";
import { NodeGroup } from "../node-group";

@Component({
	selector: 'wsr-group-selector',
	styleUrls: ['./group-selector.component.css'],
	templateUrl: './group-selector.component.html',
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