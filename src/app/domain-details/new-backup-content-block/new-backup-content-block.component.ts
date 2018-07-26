import { Component, OnInit } from '@angular/core';
import {NofilterContentBlockComponent} from "../nofilter-content-block/nofilter-content-block.component";

@Component({
  selector: 'app-new-backup-content-block',
  templateUrl: './new-backup-content-block.component.html',
  styleUrls: ['./new-backup-content-block.component.css']
})
export class NewBackupContentBlockComponent extends NofilterContentBlockComponent implements OnInit {

  ngOnInit() {
  }

}
