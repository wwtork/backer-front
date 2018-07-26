import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';

@Component({
    selector: 'app-directory-list-node',
    templateUrl: './directory-list-node.component.html',
    styleUrls: ['./directory-list-node.component.css']
})
export class DirectoryListNodeComponent implements OnInit {

    constructor() {
    }

    @Input() folders: any = [];
    @Input() items: any = [];
    @Output() expanded: EventEmitter<any> = new EventEmitter();
    @Output() selected: EventEmitter<any> = new EventEmitter();

    ngOnInit() {
    }

    onExpand(params) {
        this.expanded.emit(params);
    }

    onSelect(params) {
        this.selected.emit(params);
    }

}
