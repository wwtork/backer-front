import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TicketListComponent } from './ticket-list/ticket-list.component';
import { TicketDetailsComponent} from "./ticket-details/ticket-details.component";
import {LoggedInGuard} from "../authentication/logged-in.guard";
import {RouterModule, Routes} from "@angular/router";
import {Ng4LoadingSpinnerModule} from "ng4-loading-spinner";
import {UserService} from "../user.service";
import {TicketService} from "./ticket.service";
import {TicketResolve} from "./ticket.resolve";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { TicketNewComponent } from './ticket-new/ticket-new.component';
import {SharedModule} from "../shared/shared.module";

const ticketRoutes: Routes = [
  {path: '', redirectTo: 'list', pathMatch: 'full'},
  {path: 'list', component: TicketListComponent, canActivate: [LoggedInGuard]},
  {path: 'details/:id',component: TicketDetailsComponent, canActivate: [LoggedInGuard]},
  {path: 'new', component: TicketNewComponent, canActivate: [LoggedInGuard]},
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    RouterModule.forChild(ticketRoutes),
    Ng4LoadingSpinnerModule.forRoot(),
    ReactiveFormsModule
  ],
  providers: [
    LoggedInGuard,
    UserService,
    TicketService,
    TicketResolve
  ],
  declarations: [TicketListComponent, TicketDetailsComponent, TicketNewComponent]
})
export class TicketModule { }
