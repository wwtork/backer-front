import {Component, OnInit} from '@angular/core';
import {NgbActiveModal} from "@ng-bootstrap/ng-bootstrap";
import {Backup} from "../backup";
import {FormGroup, FormControl} from "@angular/forms";

@Component({
    selector: 'app-new-backup-modal',
    templateUrl: './new-backup-modal.component.html',
    styleUrls: ['./new-backup-modal.component.css']
})
export class NewBackupModalComponent implements OnInit {

    entity: Backup;
    backupForm;


    constructor(public activeModal: NgbActiveModal) {
        this.backupForm = new FormGroup({
            sql: new FormControl(false),
            ftp: new FormControl(false),
            name: new FormControl(''),
            scanMode: new FormControl(0)
        });
    }


    ngOnInit() {
    }

    createEntity():Backup{
        return new Backup().deserialize(this.backupForm.value);
    }
}
