import { ResourceRecordComponentConstructor } from "./constructor-interface";
import { ResourceRecordAComponent } from "./resource-record-a.component";
import { ResourceRecordMxComponent } from "./resource-record-mx.component";
import { ResourceRecordSrvComponent} from "./resource-record-srv.component";
import { ResourceRecordTxtComponent } from "./resource-record-txt.component";
import { ResourceRecordSoaComponent } from "./resource-record-soa.component";
import { ResourceRecordCnameComponent } from "./resource-record-cname.component";
import { ResourceRecordNsComponent } from "./resource-record-ns.component";
import { ResourceRecordAaaaComponent } from "./resource-record-aaaa.component";
import { ResourceRecordCaaComponent } from "./resource-record-caa.component";

export class Factory {
	static generate(type: string): ResourceRecordComponentConstructor {
		switch (type){
			case 'A':
				return ResourceRecordAComponent;
			case 'MX':
				return ResourceRecordMxComponent;
			case 'TXT':
				return ResourceRecordTxtComponent;
			case 'SOA':
				return ResourceRecordSoaComponent;
			case 'CNAME':
				return ResourceRecordCnameComponent;
			case 'NS':
				return ResourceRecordNsComponent;
			case 'AAAA':
				return ResourceRecordAaaaComponent;
			case 'SRV':
				return ResourceRecordSrvComponent;
			case 'CAA':
				return ResourceRecordCaaComponent;
			default:
				return undefined;
		}
	}
}
