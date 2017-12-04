import { Component, OnInit } from '@angular/core';

import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ReferencesService } from "../service/references.service";
import { TreeviewItem } from "ngx-treeview";
import { NodeRegion } from "../node-region";

@Component({
	selector: 'wsr-region-selector',
	styleUrls: ['./region-selector.component.css'],
	templateUrl: './region-selector.component.html'
})
export class RegionSelectorComponent implements OnInit
{
	readonly twConfig = {
		hasAllCheckBox: true,
		hasFilter: false,
		hasCollapseExpand: true,
		decoupleChildFromParent: false,
		maxHeight: 500
	};

	treeItems: TreeviewItem[];

	private regions: NodeRegion[];

	value: NodeRegion[];

	constructor(
		private referencesService: ReferencesService,
		public activeModal: NgbActiveModal
	) {}

	onSelect(values: string[]){
		let a: string[];
		this.value = [];
		for (let i = 0; i < values.length; i++){
			a = values[i].split('|');
			this.value.push({
				whoisRegion: a[1],
				whoisCountry: a[0]
			});
		}
	}

	getRegions() {
		this.referencesService.getNodeRegions()
			.then(
				regions => {
					this.regions = regions;
					this.treeItems = this.getTreeViewModel();
				})
			.catch(
				error => null
			)
	}

	getTreeViewModel(): TreeviewItem[] {
		let a = [];
		let val: string;
		let country: string;
		for (let i = 0; i < this.regions.length; i++){
			country = this.regions[i].whoisCountry;
			if (!a.hasOwnProperty(country)){
				a[country] = [];
			}
			val = this.regions[i].whoisCountry + '|' + this.regions[i].whoisRegion;
			a[country].push({
				text: this.regions[i].whoisRegion,
				value: val,
				checked: this.isRegionIncluded(this.regions[i])
			});
		}
		let result = [];
		for (let p in a){
			if (!a.hasOwnProperty(p)){
				continue;
			}
			result.push(new TreeviewItem({
				text: p, value: p, children: a[p]
			}));
		}
		return result;
	}

	private isRegionIncluded(region: NodeRegion): boolean {
		return this.value.find((r) => {return r.whoisCountry == region.whoisCountry && r.whoisRegion == region.whoisRegion}) !== undefined;
	}

	ngOnInit(): void {
		this.getRegions();
	}
}