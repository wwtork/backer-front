
import {Serializable} from "../serializable";
export class User extends Serializable{
    get apiKey():string {
        return this._apiKey;
    }

    set apiKey(value:string) {
        this._apiKey = value;
    }

    get passwordComplicity():number {
        return this._passwordComplicity;
    }

    set passwordComplicity(value:number) {
        this._passwordComplicity = value;
    }

    getRequestCredentials() {
        return {apiKey: this.apiKey}
    }

    private _email:string;
    private _apiKey:string;
    private _password:string;
    private _remember_me:boolean;
    private _agreement:boolean;
    private _promocode:string;
    private _website:string;
    private _passwordComplicity:number;

    constructor() {
        super();

        this._remember_me = false;
        this._agreement = false;
    };


    get website():string {
        return this._website;
    }

    set website(value:string) {
        this._website = value;
    }

    get promocode():string {
        return this._promocode;
    }

    set promocode(value:string) {
        this._promocode = value;
    }

    get agreement():boolean {
        return this._agreement;
    }

    set agreement(value:boolean) {
        this._agreement = value;
    }

    get remember_me():boolean {
        return this._remember_me;
    }

    set remember_me(value:boolean) {
        this._remember_me = value;
    }

    get password():string {
        return this._password;
    }

    set password(value:string) {
        this._password = value;
    }

    get email():string {
        return this._email;
    }

    set email(value:string) {
        this._email = value;
    }

    getSerialized() {
        return {
            email: this.email,
            plainPassword: this.password,
            promoCode: this.promocode,
            username: this.email
        }
    }
}