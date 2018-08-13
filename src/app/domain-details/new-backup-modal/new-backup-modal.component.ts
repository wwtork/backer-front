import { Component, OnInit } from '@angular/core';
import {NgbActiveModal} from "@ng-bootstrap/ng-bootstrap";
import {Backup} from "../backup";

@Component({
  selector: 'app-new-backup-modal',
  templateUrl: './new-backup-modal.component.html',
  styleUrls: ['./new-backup-modal.component.css']
})
export class NewBackupModalComponent implements OnInit {

  constructor(public activeModal: NgbActiveModal) { }

  entity:Backup;

  ngOnInit() {
  }

}
