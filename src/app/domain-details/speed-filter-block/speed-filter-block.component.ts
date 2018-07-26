import { Component, OnInit } from '@angular/core';
import {FilterBlockComponent} from "../filter-block/filter-block.component";

@Component({
  selector: 'app-speed-filter-block',
  templateUrl: './speed-filter-block.component.html',
  styleUrls: ['./speed-filter-block.component.css']
})
export class SpeedFilterBlockComponent extends FilterBlockComponent implements OnInit {

  constructor() {
    super();
  }

}
