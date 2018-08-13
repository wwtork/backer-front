import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'side-panel',
  templateUrl: './side-panel.component.html',
  styleUrls: ['./side-panel.component.css']
})
export class SidePanelComponent implements OnInit {

  lastSiteId = 116;
  @Input() currentPage:string;

  constructor() { }

  ngOnInit() {
  }

}
