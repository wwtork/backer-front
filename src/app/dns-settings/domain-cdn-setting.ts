import {NodeGroup} from "./node-group";
import {NodeRegion} from "./node-region";

export enum DomainCdnType {
	None,
	Auto,
	Region,
	Group
}

export class DomainCdnSetting {
	regions: NodeRegion[] = [];
	group: NodeGroup;
	constructor(
		public type: DomainCdnType = DomainCdnType.None
	){}
}