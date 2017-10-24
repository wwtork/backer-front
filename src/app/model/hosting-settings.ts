import {Method} from "./method";
import {Tariff} from "./tariff";
import {Serializable} from "./serializable";
export class HostingSettings extends Serializable {
    get predefinedRoots() {
        return this._predefinedRoots;
    }

    set predefinedRoots(value) {
        this._predefinedRoots = value;
    }

    get serverId(): number {
        return this._serverId;
    }

    set serverId(value: number) {
        this._serverId = value;
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
    private _serverId: number;
    private _predefinedRoots;

    getHostAccessData(){
        return {
            hostUsername: this.hostUsername,
            hostPassword: this.hostPassword,
            hostAddress: this.hostAddress
        }
    }

    getHostScanData() {
        return {
            serverId: this.serverId,
            predefinedRoots: this.predefinedRoots,
            domainFilter: this.domain
        }
    }
}