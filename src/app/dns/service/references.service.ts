import { Injectable, Inject, Optional } from '@angular/core';
import { NodeGroup } from "../node-group";
import { nodeGroupsMock} from "./node-groups-mock";
import { nodeRegionsMock} from "./node-regions-mock";
import { NodeRegion } from "../node-region";
import { Http } from "@angular/http";
import { Response } from '@angular/http';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class ReferencesService
{
	constructor(
		private http: Http,
		@Inject('nodeIpsUrl')
		private nodeIpsUrl: string,
	) {}

	private promise: Promise<void>;

	private groups: NodeGroup[];// = nodeGroupsMock; /////
	private regions: NodeRegion[];// = nodeRegionsMock; /////

	public getNodeGroups(): Promise<NodeGroup[]> {
		if (this.groups){
			return Promise.resolve(this.groups);
		}
		return this.requestRemoteData().then(() => Promise.resolve(this.groups));
	}

	public getNodeRegions(): Promise<NodeRegion[]> {
		if (this.regions){
			return Promise.resolve(this.regions);
		}
		return this.requestRemoteData().then(() => Promise.resolve(this.regions));
	}

	public getGroup(id): Promise<NodeGroup> {
		if (this.groups){
			let group = this.groups.find(element => {return element.id == id});
			return Promise.resolve(group);
		}
		return this.requestRemoteData().then(() => {
			let group = this.groups.find(element => {return element.id == id});
			return Promise.resolve(group);
		});
	}

	private requestRemoteData(): Promise<void> {
		if (this.promise){
			return this.promise;
		}
		this.promise = this.http.get(this.nodeIpsUrl)
			.toPromise()
			.then((response: Response) => {
				this.regions = response.json().regions;
				this.groups = response.json().groups;
				return Promise.resolve();
			})
			.catch((error) => {
				return Promise.reject(error._body)
			});

		return this.promise;
	}

	public static getCountryCode(country: string): string {
		switch (country) {
			case 'France':
				return 'fr';
			case 'Lithuania':
				return 'lt';
			case 'Russia':
				return 'ru';
			case 'Poland':
				return 'pl';
			case 'Czech':
				return 'cz';
			case 'Finland':
				return 'fi';
			case 'Ireland':
				return 'ie';
			case 'Belgium':
				return 'be';
			case 'Germany':
				return 'de';
			case 'Portugal':
				return 'pt';
			case 'Spain':
				return 'es';
			case 'United Kingdom':
				return 'gb';
			case 'Italy':
				return 'it';
			case 'Netherlands':
				return 'nl';
			case 'Ukraine':
				return 'ua';
			case 'Bulgaria':
				return 'bg';
			case 'Latvia':
				return 'lv';
			case 'USA':
				return 'us';
			case 'Australia':
				return 'au';
			case 'Indonesia':
				return 'id';
			case 'Singapore':
				return 'sg';
			case 'Austria':
				return 'at';
			case 'Canada':
				return 'ca';
			case 'Sweden':
				return 'se';
			case 'India':
				return 'in';
			case 'Romania':
				return 'ro';
			case 'Belarus':
				return 'by';
			case 'Turkey':
				return 'tr';
			case 'Norway':
				return 'no';
			case 'Switzerland':
				return 'ch';
			case 'South Korea':
				return 'kr';
			case 'Brazil':
				return 'br';
			case 'Japan':
				return 'jp';
			case 'China':
				return 'cn';
			case 'Republic of South Africa':
				return 'za';
			case 'Argentina':
				return 'ar';
			default:
				return 'xx';
		}
	}
}