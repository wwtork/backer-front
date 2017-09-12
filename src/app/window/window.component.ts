import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'window',
  templateUrl: './window.component.html',
  styleUrls: ['./window.component.css']
})
export class WindowComponent implements OnInit {

  content:any;
  @Input() action: string;
  constructor() {

  }

  ngOnInit() {
  }

}
