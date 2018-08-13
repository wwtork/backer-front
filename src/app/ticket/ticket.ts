import {TicketMessage} from "./ticket-message";
import {User} from "app/user";
import {Deserializable} from "../deserializable";
export class Ticket implements Deserializable{
    subject:string;
    messages:TicketMessage[];
    id:number;
    user:User;
    last_message:string;
    status:string;
    priority:string;

    deserialize(input: any) {
        Object.assign(this, input);
        this.messages = [];
        for(let message in input.messages){
            this.messages.push(new TicketMessage().deserialize(input.messages[message]));
        }
        this.user = new User().deserialize(input.user);
        return this;
    }
}
