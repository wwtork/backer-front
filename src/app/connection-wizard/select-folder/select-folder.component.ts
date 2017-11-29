import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
    selector: 'app-select-folder',
    templateUrl: './select-folder.component.html',
    styleUrls: ['./select-folder.component.css']
})
export class SelectFolderComponent implements OnInit {

    @Input() path = '';
    @Output() folderSelected: EventEmitter<any>;

    constructor() {
        this.folderSelected = new EventEmitter();
    }

    ngOnInit() {
    }

    folderSelect() {
        this.folderSelected.emit(this.path);
    }

}
