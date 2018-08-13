import {Injectable} from '@angular/core';
import {parameters} from "../../parameters";
import {Http, Response} from "@angular/http";
import {Ticket} from "./ticket";
import {Observable} from "rxjs/Observable";
import {AuthenticationService} from "../authentication/authentication.service";
import {resolve} from "url";
import {reject} from "q";
import {TicketMessage} from "app/ticket/ticket-message";

@Injectable()
export class TicketService {

    constructor(private http: Http) {
    }

    getTicket(id): Promise<Ticket> {
        return this.http.get(parameters.apiUrl + parameters.getTicketUri.replace('{ticketId}', id) + '?api_key=' + AuthenticationService.getUser().apiKey)
            .toPromise()
            .then(res => {
                console.log(res.json().ticket);
                return res.json().ticket ? new Ticket().deserialize(res.json().ticket) : null
            })
    }

    getTicketList(): Promise<Ticket> {
        return this.http.get(parameters.apiUrl + parameters.getTicketListUri + '?api_key=' + AuthenticationService.getUser().apiKey)
            .toPromise()
            .then(res => res.json().tickets.map((ticket: Ticket) => new Ticket().deserialize(ticket)));
    }

    saveTicketMessage(id, message: TicketMessage): Promise<Ticket> {
        return this.http.get(parameters.apiUrl + parameters.ticketUpdateUri.replace('{ticketId}', id) + '?api_key=' + AuthenticationService.getUser().apiKey + '&data=' + JSON.stringify(message))
            .toPromise()
            .then(res => {
                return res.json().ticket ? new Ticket().deserialize(res.json().ticket) : null;
            })
    }

    createTicketMessage(ticket: Ticket): Promise<Ticket> {
        return this.http.get(parameters.apiUrl + parameters.ticketCreateUri + '?api_key=' + AuthenticationService.getUser().apiKey + '&data=' + JSON.stringify(ticket))
            .toPromise()
            .then(res => {
                return res.json().ticket ? new Ticket().deserialize(res.json().ticket) : null;
            })
    }
}
