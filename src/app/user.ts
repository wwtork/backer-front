import {Deserializable} from "./deserializable";
export class User implements Deserializable{
    email:string;
    username:string;
    id:number;
    type:string;

    deserialize(input: any) {
        Object.assign(this, input);
        return this;
    }
}
