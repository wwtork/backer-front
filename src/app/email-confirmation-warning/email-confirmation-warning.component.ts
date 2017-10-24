import { Component, OnInit } from '@angular/core';
import {AuthService} from "../service/auth.service";
import {BackendDataService} from "../service/backend-data.service";

@Component({
  selector: 'app-email-confirmation-warning',
  templateUrl: './email-confirmation-warning.component.html',
  styleUrls: ['./email-confirmation-warning.component.css']
})
export class EmailConfirmationWarningComponent implements OnInit {

  constructor(public authService: AuthService, public backendDataService:BackendDataService) { }

  ngOnInit() {

  }

}
