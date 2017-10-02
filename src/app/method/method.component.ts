import { Component, OnInit } from '@angular/core';
import {HostingStage} from "../model/hosting-stage";

@Component({
  selector: 'app-method',
  templateUrl: './method.component.html',
  styleUrls: ['./method.component.css']
})
export class MethodComponent extends HostingStage implements OnInit {

  constructor() { super(); }

  ngOnInit() {
  }

}
