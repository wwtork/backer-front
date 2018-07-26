import {Component, Input, OnInit} from '@angular/core';
import {NofilterBlockComponent} from "../nofilter-block/nofilter-block.component";

@Component({
    selector: 'app-backup-filter-block',
    templateUrl: './backup-filter-block.component.html',
    styleUrls: ['./backup-filter-block.component.css']
})
export class BackupFilterBlockComponent extends NofilterBlockComponent implements OnInit {

    constructor() {
        super();
    }

}
