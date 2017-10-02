import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-connect-state',
  templateUrl: './connect-state.component.html',
  styleUrls: ['./connect-state.component.css']
})
export class ConnectStateComponent implements OnInit {

  @Input() state:string;
  constructor() { }

  ngOnInit() {
  }

}
