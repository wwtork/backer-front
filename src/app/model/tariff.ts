import {Serializable} from "./serializable";
export class Tariff extends Serializable{
    get isPayable():boolean {
        return this._isPayable;
    }

    set isPayable(value:boolean) {
        this._isPayable = value;
    }
    get isRequestable():boolean {
        return this._isRequestable;
    }

    set isRequestable(value:boolean) {
        this._isRequestable = value;
    }
    get cdnCacheLimit():number {
        return this._cdnCacheLimit;
    }

    set cdnCacheLimit(value:number) {
        this._cdnCacheLimit = value;
    }
    get cdnLimit():number {
        return this._cdnLimit;
    }

    set cdnLimit(value:number) {
        this._cdnLimit = value;
    }
    get sizeLimit():number {
        return this._sizeLimit;
    }

    set sizeLimit(value:number) {
        this._sizeLimit = value;
    }
    get siteLimit():number {
        return this._siteLimit;
    }

    set siteLimit(value:number) {
        this._siteLimit = value;
    }
    get description():string {
        return this._description;
    }

    set description(value:string) {
        this._description = value;
    }
    get name():string {
        return this._name;
    }

    set name(value:string) {
        this._name = value;
    }
    get price():number {
        return this._price;
    }

    set price(value:number) {
        this._price = value;
    }
    get id():number {
        return this._id;
    }

    set id(value:number) {
        this._id = value;
    }
    private _id:number;
    private _price:number;
    private _name:string;
    private _description:string;
    private _siteLimit:number;
    private _sizeLimit:number;
    private _cdnLimit:number;
    private _cdnCacheLimit:number;
    private _isPayable:boolean;
    private _isRequestable:boolean;

    isFree(){
        return this.price == 0;
    }

    constructor(){
        super();
    }

}