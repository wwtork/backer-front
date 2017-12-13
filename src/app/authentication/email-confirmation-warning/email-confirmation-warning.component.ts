import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from "../authentication.service";
import {User} from "../user";

@Component({
  selector: 'email-confirmation-warning',
  templateUrl: './email-confirmation-warning.component.html',
  styleUrls: ['./email-confirmation-warning.component.css']
})
export class EmailConfirmationWarningComponent implements OnInit {

  user: User;

  constructor() {
    this.user = AuthenticationService.getUser();
  }

  ngOnInit() {

  }

}
