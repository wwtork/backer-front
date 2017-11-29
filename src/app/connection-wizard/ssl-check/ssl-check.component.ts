import { Component, OnInit } from '@angular/core';
import {HostingStage} from "../model/hosting-stage";

@Component({
  selector: 'app-ssl-check',
  templateUrl: './ssl-check.component.html',
  styleUrls: ['./ssl-check.component.css']
})
export class SslCheckComponent extends HostingStage implements OnInit {

  constructor() { super(); }

  ngOnInit() {
  }

}
