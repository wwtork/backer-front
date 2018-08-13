import { Component, OnInit } from '@angular/core';
import {NofilterBlockComponent} from "../nofilter-block/nofilter-block.component";

@Component({
  selector: 'app-messages-filter-block',
  templateUrl: './messages-filter-block.component.html',
  styleUrls: ['./messages-filter-block.component.css']
})
export class MessagesFilterBlockComponent extends NofilterBlockComponent implements OnInit {

}
