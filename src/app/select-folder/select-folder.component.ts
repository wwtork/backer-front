import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
    selector: 'app-select-folder',
    templateUrl: './select-folder.component.html',
    styleUrls: ['./select-folder.component.css']
})
export class SelectFolderComponent implements OnInit {

    private path;
    @Output() folderSelected: EventEmitter<any>;

    constructor() {
        this.folderSelected = new EventEmitter();
    }

    ngOnInit() {
    }

    folderSelect() {
        console.log('changed');
        this.folderSelected.emit(this.path);
    }

}
