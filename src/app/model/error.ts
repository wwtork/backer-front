
import {Serializable} from "./serializable";
export class ScanErrors extends Serializable {

    get permissionError(): boolean {
        return this._permissionError;
    }

    set permissionError(value: boolean) {
        this._permissionError = value;
    }
    get scriptError(): boolean {
        return this._scriptError;
    }

    set scriptError(value: boolean) {
        this._scriptError = value;
    }
    get folderError(): boolean {
        return this._folderError;
    }

    set folderError(value: boolean) {
        this._folderError = value;
    }

    private _folderError = false;
    private _scriptError = false;
    private _permissionError = false;

}