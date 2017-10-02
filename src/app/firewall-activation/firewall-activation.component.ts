import { Component, OnInit } from '@angular/core';
import {HostingStage} from "../model/hosting-stage";

@Component({
  selector: 'app-firewall-activation',
  templateUrl: './firewall-activation.component.html',
  styleUrls: ['./firewall-activation.component.css']
})
export class FirewallActivationComponent extends HostingStage implements OnInit {

  constructor() { super(); }

  ngOnInit() {
  }

}
