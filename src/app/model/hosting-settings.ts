export class HostingSettings{
    get backupSupport():boolean {
        return this._backupSupport;
    }

    set backupSupport(value:boolean) {
        this._backupSupport = value;
    }
    get firewallSupport():boolean {
        return this._firewallSupport;
    }

    set firewallSupport(value:boolean) {
        this._firewallSupport = value;
    }
    get hostUsername():string {
        return this._hostUsername;
    }

    set hostUsername(value:string) {
        this._hostUsername = value;
    }
    get hostPassword():string {
        return this._hostPassword;
    }

    set hostPassword(value:string) {
        this._hostPassword = value;
    }
    get hostAddress():string {
        return this._hostAddress;
    }

    set hostAddress(value:string) {
        this._hostAddress = value;
    }
    stage = 0;
    get domain():string {
        return this._domain;
    }

    set domain(value:string) {
        this._domain = value;
    }
    private _backupSupport:boolean;
    private _firewallSupport:boolean;
    private _hostUsername:string;
    private _hostPassword:string;
    private _hostAddress:string;
    private _domain:string;


}