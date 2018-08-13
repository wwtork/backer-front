import {Component, Input, OnInit} from '@angular/core';
import {NofilterContentBlockComponent} from "../nofilter-content-block/nofilter-content-block.component";
import {NewBackupModalComponent} from "../new-backup-modal/new-backup-modal.component";
import {RestoreBackupModalComponent} from "../restore-backup-modal/restore-backup-modal.component";
import {Backup} from "../backup";
import {Restore} from "../restore";

@Component({
    selector: 'app-new-backup-content-block',
    templateUrl: './new-backup-content-block.component.html',
    styleUrls: ['./new-backup-content-block.component.css']
})
export class NewBackupContentBlockComponent extends NofilterContentBlockComponent implements OnInit {

    ngOnInit() {

    }

    @Input() siteId;

    public newBackup() {
        this.openModal(NewBackupModalComponent, new Backup());
    }

    public restoreBackup() {
        this.openModal(RestoreBackupModalComponent, new Restore());
    }

    public processModalResult(result) {
        if(result instanceof Backup){
            this.backendDataService.createBackup(result, this.siteId).then((result) => {
                console.log(result);
            }, (err) => {
                this.error = err;
                return false;
            });
        }
        else if(result instanceof Restore){
            this.backendDataService.restoreBackup(result, this.siteId).then((result) => {
                console.log(result);
            }, (err) => {
                this.error = err;
                return false;
            });
        }
    }

}
