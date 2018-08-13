import { Injectable } from '@angular/core';
import {parameters} from "../../parameters";
import {Http, Response} from "@angular/http";
import {Ticket} from "./ticket";
import {Observable} from "rxjs/Observable";
import {AuthenticationService} from "../authentication/authentication.service";
import {ActivatedRouteSnapshot, Resolve} from "@angular/router";
import {TicketService} from "./ticket.service";

@Injectable()
export class TicketResolve implements Resolve<Ticket> {

    constructor(private ticketService: TicketService) {}

    resolve(route: ActivatedRouteSnapshot) {
        return this.ticketService.getTicket(route.paramMap.get('id'));
    }

}
