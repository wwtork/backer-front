import { Component, OnInit } from '@angular/core';
import {FilterBlockComponent} from "../filter-block/filter-block.component";

@Component({
  selector: 'app-reliability-filter-block',
  templateUrl: './reliability-filter-block.component.html',
  styleUrls: ['./reliability-filter-block.component.css']
})
export class ReliabilityFilterBlockComponent extends FilterBlockComponent implements OnInit {

  constructor() {
    super();
  }

}
