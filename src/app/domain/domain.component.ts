import { Component, OnInit } from '@angular/core';
import {HostingAccessComponent} from "../hosting-access/hosting-access.component";
import {HostingSettings} from "../model/hosting-settings";
import {ConnectWizardComponent} from "../connect-wizard/connect-wizard.component";
import {HostingStage} from "../model/hosting-stage";

@Component({
  selector: 'app-domain',
  templateUrl: './domain.component.html',
  styleUrls: ['./domain.component.css']
})
export class DomainComponent extends HostingStage implements OnInit {

  constructor() { super(); }

  ngOnInit() {
  }

}
