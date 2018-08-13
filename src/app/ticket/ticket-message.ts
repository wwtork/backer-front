import {User} from "../user";
import {Ticket} from "./ticket";
import {Deserializable} from "../deserializable";
export class TicketMessage implements Deserializable{
    user: User;
    message: string;
    created_at: string;
    status:string;
    priority:string;

    deserialize(input: any) {
        Object.assign(this, input);
        this.user = new User().deserialize(input.user);
        return this;
    }
}
