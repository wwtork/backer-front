import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {TicketService} from "../ticket.service";
import {Ng4LoadingSpinnerService} from "ng4-loading-spinner";
import {TicketMessage} from "../ticket-message";
import {User} from "../../user";
import {AuthenticationService} from "../../authentication/authentication.service";
import {Ticket} from "../ticket";
import {FormControl, FormGroup, FormArray} from "@angular/forms";

@Component({
    selector: 'app-ticket-new',
    templateUrl: './ticket-new.component.html',
    styleUrls: ['./ticket-new.component.css']
})
export class TicketNewComponent implements OnInit {

    ticket;
    ticketForm;
    messages;

    constructor(private router: Router, private ticketService: TicketService, private spinnerService: Ng4LoadingSpinnerService) {
        this.ticketForm = new FormGroup({
            subject: new FormControl(''),
            messages: new FormArray([]),
            user: new FormGroup({
                email: new FormControl(AuthenticationService.getUser().email)
            })
        });

        this.addMessage();
    }

    ngOnInit() {

    }

    addMessage(ticketMessage?:TicketMessage):void {
        let message: String;
        let priority: String;
        let status: String;

        if (ticketMessage) {
            message = ticketMessage.message;
            priority = ticketMessage.priority;
            status = ticketMessage.status;
        } else {
            message = '';
            priority = '';
            status = '';
        }
        (<FormArray>this.ticketForm.controls['messages']).push(
            new FormGroup({
                message: new FormControl(message),
                priority: new FormControl(priority),
                status: new FormControl(status)
            })
        )
    }

    saveMessage() {
        let ticket = new Ticket().deserialize(this.ticketForm.value);
        ticket.user = new User();
        ticket.user.email = AuthenticationService.getUser().email;
        this.spinnerService.show();
        this.ticketService.createTicketMessage(ticket).then((result) => {
                this.router.navigate(['/ticket/details/'+result.id]);
                this.spinnerService.hide();
            }
        );
    }

}
