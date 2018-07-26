import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
    selector: 'app-directory-list',
    templateUrl: './directory-list.component.html',
    styleUrls: ['./directory-list.component.css']
})
export class DirectoryListComponent implements OnInit {

    constructor() {
    }

    @Input() folders: any = [];
    @Input() items: any = [];
    @Output() selected: EventEmitter<any> = new EventEmitter();
    @Output() expanded: EventEmitter<any> = new EventEmitter();

    ngOnInit() {
    }

    onSelect(params) {
        this.selected.emit(params);
    }

    onExpand(params) {
        this.expanded.emit(params);
    }

}
