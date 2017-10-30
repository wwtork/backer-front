import {Method} from "./method";
import {Tariff} from "./tariff";
import {Serializable} from "./serializable";
export class Site extends Serializable {
    get id() {
        return this._id;
    }

    set id(value) {
        this._id = value;
    }
    get remoteAccess(): boolean {
        return this._remoteAccess;
    }

    set remoteAccess(value: boolean) {
        this._remoteAccess = value;
    }
    get path() {
        return this._path;
    }

    set path(value) {
        this._path = value;
    }
    get cms() {
        return this._cms;
    }

    set cms(value) {
        this._cms = value;
    }
    get url() {
        return this._url;
    }

    set url(value) {
        this._url = value;
    }
    get ip() {
        return this._ip;
    }

    set ip(value) {
        this._ip = value;
    }

    private _id;
    private _ip;
    private _url;
    private _cms;
    private _path;
    private _remoteAccess = false;
}