import { Component, OnInit } from '@angular/core';
import {HostingStage} from "../model/hosting-stage";

@Component({
  selector: 'app-ssl-download',
  templateUrl: './ssl-download.component.html',
  styleUrls: ['./ssl-download.component.css']
})
export class SslDownloadComponent extends HostingStage implements OnInit {

  constructor() { super(); }

  ngOnInit() {
  }

}
