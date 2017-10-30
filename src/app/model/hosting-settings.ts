import {Serializable} from "./serializable";
import {Site} from "./site";
export class HostingSettings extends Serializable {
    get firewallScanFinished(): boolean {
        return this._firewallScanFinished;
    }

    set firewallScanFinished(value: boolean) {
        this._firewallScanFinished = value;
    }
    get backupScanFinished(): boolean {
        return this._backupScanFinished;
    }

    set backupScanFinished(value: boolean) {
        this._backupScanFinished = value;
    }
    private _backupScanFinished: boolean;
    private _firewallScanFinished: boolean;
    get site(): Site {
        return this._site;
    }

    set site(value: Site) {
        this._site = value;
    }

    get scanPath() {
        return this._scanPath;
    }

    set scanPath(value) {
        this._scanPath = value;
    }
    get scanType(): string {
        return this._scanType;
    }

    set scanType(value: string) {
        this._scanType = value;
    }

    get predefinedRoots() {
        return this._predefinedRoots;
    }

    set predefinedRoots(value) {
        this._predefinedRoots = value;
    }

    get id(): number {
        return this._id;
    }

    set id(value: number) {
        this._id = value;
    }

    get tariffId():number {
        return this._tariffId;
    }

    set tariffId(value:number) {
        this._tariffId = value;
    }
    get methodId():number {
        return this._methodId;
    }

    set methodId(value:number) {
        this._methodId = value;
    }
    get stage():string {
        return this._stage;
    }

    set stage(value:string) {
        this._stage = value;
    }

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

    get domain():string {
        return this._domain;
    }

    set domain(value:string) {
        this._domain = value;
    }

    get tariffPay():boolean {
        return this._tariffPay;
    }

    set tariffPay(value:boolean) {
        this._tariffPay = value;
    }

    get tariffRequest():boolean {
        return this._tariffRequest;
    }

    set tariffRequest(value:boolean) {
        this._tariffRequest = value;
    }

    get sslFiles() {
        return this._sslFiles;
    }

    set sslFiles(value) {
        this._sslFiles = value;
    }

    get scanErrors() {
        return this._scanErrors;
    }

    set scanErrors(value) {
        this._scanErrors = value
    }

    private _scanErrors =  {
        searchError: false,
        permissionError: false,
        scriptError: false
    };
    private _stage:string;
    private _sslFiles;
    private _tariffRequest:boolean = false;
    private _tariffPay:boolean = false;
    private _backupSupport:boolean = false;
    private _firewallSupport:boolean = false;
    private _hostUsername:string;
    private _hostPassword:string;
    private _hostAddress:string;
    private _domain:string;
    private _methodId:number;
    private _tariffId:number;
    private _id: number;
    private _predefinedRoots;
    private _scanType = 'search';
    private _scanPath;
    private _site: Site;

    getHostAccessData(){
        return {
            hostUsername: this.hostUsername,
            hostPassword: this.hostPassword,
            hostAddress: this.hostAddress
        }
    }

    getHostScanData() {
        let request = {
            serverId: this.id,
            type: this.scanType,
            path: this.scanPath,
            filter: this.domain
        };

        if(this.scanPath) request['scanPath'] = this.scanPath;

        return request;
    }

    getFirewallScanData() {
        return {
            siteId: this.site.id,
        }
    }
}