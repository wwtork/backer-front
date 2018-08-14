import {Component, OnInit} from '@angular/core';
import {parameters} from "../../../parameters";
import {NofilterContentBlockComponent} from "../nofilter-content-block/nofilter-content-block.component";

@Component({
    selector: 'app-file-backup-content-block',
    templateUrl: './file-backup-content-block.component.html',
    styleUrls: ['./file-backup-content-block.component.css']
})
export class FileBackupContentBlockComponent extends NofilterContentBlockComponent implements OnInit {

    protected setDataUri(){
        this.data_uri = parameters.fileBackupUri;
    }

}
