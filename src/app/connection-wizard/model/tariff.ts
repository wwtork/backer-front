import {Serializable} from "../../serializable";
export class Tariff extends Serializable{
    get tariff_variants(): any {
        return this._tariff_variants;
    }

    set tariff_variants(value: any) {
        this._tariff_variants = value;
    }
    get cdn_cache_limit(): number {
        return this._cdn_cache_limit;
    }

    set cdn_cache_limit(value: number) {
        this._cdn_cache_limit = value;
    }
    get cdn_limit(): number {
        return this._cdn_limit;
    }

    set cdn_limit(value: number) {
        this._cdn_limit = value;
    }
    get size_limit(): number {
        return this._size_limit;
    }

    set size_limit(value: number) {
        this._size_limit = value;
    }
    get site_limit(): number {
        return this._site_limit;
    }

    set site_limit(value: number) {
        this._site_limit = value;
    }
    get type(): string {
        return this._type;
    }

    set type(value: string) {
        this._type = value;
    }
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
    private _site_limit:number;
    private _size_limit:number;
    private _cdn_limit:number;
    private _cdn_cache_limit:number;
    private _isPayable:boolean;
    private _isRequestable:boolean;
    private _type:string;
    private _tariff_variants:any;

    constructor(){
        super();
    }

}