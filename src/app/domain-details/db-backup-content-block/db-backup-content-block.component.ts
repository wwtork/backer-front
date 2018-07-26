import {Component, OnInit} from '@angular/core';
import {parameters} from "../../../parameters";
import {NofilterContentBlockComponent} from "../nofilter-content-block/nofilter-content-block.component";

@Component({
  selector: 'app-db-backup-content-block',
  templateUrl: './db-backup-content-block.component.html',
  styleUrls: ['./db-backup-content-block.component.css']
})
export class DbBackupContentBlockComponent extends NofilterContentBlockComponent implements OnInit {

  protected setDataUri(){
    this.data_uri = parameters.dbBackupUri;
  }

}
