export interface WsrDomainResourceRecord {
	data: any;
	ttl: any;
	pri?: any;
}

export interface WsrDomainResourceRecords {
	[type: string]: WsrDomainResourceRecord[];
}

export interface WsrResourceRecords {
	[domain: string]: WsrDomainResourceRecords;
}

export interface WsrDnsInfo {
	domain: string,
	dnsZone: WsrResourceRecords,
	hostList: any,
}
