import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list/list.component';
import {DetailsComponent} from "./details/details.component";
import {LoggedInGuard} from "../authentication/logged-in.guard";
import {RouterModule, Routes} from "@angular/router";
const ticketRoutes: Routes = [
  {path: '', redirectTo: 'list', pathMatch: 'full'},
  {path: 'list', component: ListComponent, canActivate: [LoggedInGuard]},
  {path: 'details/:ticketId', component: DetailsComponent, canActivate: [LoggedInGuard]},
];
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(ticketRoutes)
  ],
  declarations: [ListComponent, DetailsComponent]
})
export class TicketModule { }
