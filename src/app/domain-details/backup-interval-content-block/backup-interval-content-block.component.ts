import {Component, OnInit} from '@angular/core';
import {parameters} from "../../../parameters";
import {NofilterContentBlockComponent} from "../nofilter-content-block/nofilter-content-block.component";

@Component({
    selector: 'app-backup-interval-content-block',
    templateUrl: './backup-interval-content-block.component.html',
    styleUrls: ['./backup-interval-content-block.component.css']
})
export class BackupIntervalContentBlockComponent extends NofilterContentBlockComponent implements OnInit {

    change_uri = {
        'storage_time': parameters.changeStorageTimeUri,
        'db_interval': parameters.changeDbBackupIntervalUri,
        'file_interval': parameters.changeFileBackupIntervalUri
    };


    protected setDataUri() {
        this.data_uri = parameters.storageInfoUri;
    }

    protected updateInfo(key, value) {
        let result = this.backendDataService.securedPost(this.change_uri[key].replace('{siteId}', this.siteId.toString()), JSON.stringify({interval: value})).then((result) => {
            this.updateContent();
        }, (err) => {
            return [];
        });
    }

}
