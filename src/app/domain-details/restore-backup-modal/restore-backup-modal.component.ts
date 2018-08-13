import { Component, OnInit } from '@angular/core';
import {NgbActiveModal} from "@ng-bootstrap/ng-bootstrap";
import {Restore} from "../restore";
import {BackendDataService} from "../../backend-data.service";
import {Backup} from "../backup";

@Component({
  selector: 'app-restore-backup-modal',
  templateUrl: './restore-backup-modal.component.html',
  styleUrls: ['./restore-backup-modal.component.css']
})
export class RestoreBackupModalComponent implements OnInit {

  entity:Restore;
  backups: Backup[];
  siteId:number;

  constructor(private backendDataService:BackendDataService, public activeModal: NgbActiveModal) {

  }

  updateList(type){
      this.entity.type = type;
      this.backendDataService.getBackupList(type, this.siteId).then((result) => {
          this.backups = result;
          if(this.backups.length) this.entity.backupId = this.backups[0].id;
      }, (err) => {
          this.backups = [];
      });
  }

  onTypeChange(event){
      this.updateList(event.target.value);
  }

  onBackupChange(event){
     this.entity.backupId = event.target.value;
  }

  ngOnInit() {
      this.updateList('ftp');
  }

}
