import { Component, OnInit } from '@angular/core';
import {HostingStage} from "../model/hosting-stage";

@Component({
  selector: 'app-update-dns',
  templateUrl: './update-dns.component.html',
  styleUrls: ['./update-dns.component.css']
})
export class UpdateDnsComponent extends HostingStage implements OnInit {

  constructor() { super(); }

  ngOnInit() {
  }

}
