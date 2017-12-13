import { Component, OnInit } from '@angular/core';
import {User} from "../authentication/user";
import {AuthenticationService} from "../authentication/authentication.service";

@Component({
  selector: 'panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.css']
})
export class PanelComponent implements OnInit {

  user:User;

  constructor() {
  }

  isLoggedIn(){
    return AuthenticationService.isLoggedIn();
  }

  getUser(){
    return AuthenticationService.getUser();
  }

  ngOnInit() {
  }

}
