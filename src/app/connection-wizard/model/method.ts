import {Serializable} from "../../serializable";
export class Method extends Serializable{
    get slug():string {
        return this._slug;
    }

    set slug(value:string) {
        this._slug = value;
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
    get id():number {
        return this._id;
    }

    set id(value:number) {
        this._id = value;
    }

    private _id:number;
    private _name:string;
    private _description:string;
    private _slug:string = 'professional';

    constructor(){
        super();
    }
}