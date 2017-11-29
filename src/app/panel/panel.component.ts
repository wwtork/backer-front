import { Component, OnInit } from '@angular/core';
import {User} from "../authentication/user";
import {AuthenticationService} from "../authentication/authentication.service";

@Component({
  selector: 'panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.css']
})
export class PanelComponent implements OnInit {

  private user:User;
  private isLoggedIn;


  constructor() {
      this.isLoggedIn = AuthenticationService.isLoggedIn();
      this.user = AuthenticationService.getUser();
  }

  ngOnInit() {
  }

}
