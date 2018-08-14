import { Component, OnInit } from '@angular/core';
import {parameters} from "../../../parameters";
import {NofilterContentBlockComponent} from "../nofilter-content-block/nofilter-content-block.component";

@Component({
  selector: 'app-messages-content-block',
  templateUrl: './messages-content-block.component.html',
  styleUrls: ['./messages-content-block.component.css']
})
export class MessagesContentBlockComponent extends NofilterContentBlockComponent implements OnInit {

  protected setDataUri(){
    this.data_uri = parameters.messagesUri;
  }

}
