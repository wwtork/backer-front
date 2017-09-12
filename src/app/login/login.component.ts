import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'login-form',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username: string;
  password: string;
  rememberme: boolean = true;

  constructor() { }

  onSubmit(form){
    console.log(form);
  }

  ngOnInit() {
  }

}
