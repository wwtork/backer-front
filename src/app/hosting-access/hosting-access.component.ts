import { Component, OnInit } from '@angular/core';
import {HostingStage} from "../model/hosting-stage";

@Component({
  selector: 'app-hosting-access',
  templateUrl: './hosting-access.component.html',
  styleUrls: ['./hosting-access.component.css']
})
export class HostingAccessComponent extends HostingStage implements OnInit {

  constructor() { super(); }

  ngOnInit() {
  }

}
