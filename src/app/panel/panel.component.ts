import { Component, OnInit } from '@angular/core';
import {AuthService} from "../service/auth.service";

@Component({
  selector: 'panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.css']
})
export class PanelComponent implements OnInit {

  constructor(public authService: AuthService) { }

  ngOnInit() {
  }

}
