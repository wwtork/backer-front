import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {TicketMessage} from "app/ticket/ticket-message";
import {TicketService} from "../ticket.service";
import {User} from "../../user";
import {AuthenticationService} from "app/authentication/authentication.service";
import {Ng4LoadingSpinnerService} from "ng4-loading-spinner";
import {Subscription} from "rxjs/Subscription";

@Component({
    selector: 'app-ticket-details',
    templateUrl: './ticket-details.component.html',
    styleUrls: ['./ticket-details.component.css']
})
export class TicketDetailsComponent implements OnInit {

    ticket;
    private sub: Subscription;

    constructor(private route: ActivatedRoute, private ticketService: TicketService, private spinnerService: Ng4LoadingSpinnerService) {
    }

    ngOnInit() {
        this.sub = this.route.params.subscribe(params => {
            let id = +params['id']; // (+) converts string 'id' to a number
            this.spinnerService.show();
            this.ticketService.getTicket(id).then((result) => {
                this.ticket = result;
                this.spinnerService.hide();
            });
        });

    }

    ngOnDestroy() {
        this.sub.unsubscribe();
    }

    saveMessage(value) {
        let ticketMessage = new TicketMessage().deserialize(value);
        ticketMessage.user = new User();
        ticketMessage.user.email = AuthenticationService.getUser().email;
        this.spinnerService.show();
        this.ticketService.saveTicketMessage(this.ticket.id, ticketMessage).then((result) => {
                this.ticket = result;
                this.spinnerService.hide();
            }
        );
    }

}
