import { Component, OnInit } from '@angular/core';
import {TicketService} from "app/ticket/ticket.service";
import {Ticket} from "app/ticket/ticket";
import {Observable} from "rxjs/Observable";

@Component({
  selector: 'app-ticket-list',
  templateUrl: './ticket-list.component.html',
  styleUrls: ['./ticket-list.component.css']
})
export class TicketListComponent implements OnInit {

  protected tickets:Promise<Ticket>;

  constructor(ticketService: TicketService) {
    this.tickets = ticketService.getTicketList();
    console.log(this.tickets);
  }

  ngOnInit() {
      console.log(this.tickets);
  }

}
