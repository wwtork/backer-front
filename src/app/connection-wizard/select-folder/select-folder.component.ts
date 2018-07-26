import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Ng4LoadingSpinnerService} from "ng4-loading-spinner";
import {BackendDataService} from "../../backend-data.service";

@Component({
    selector: 'app-select-folder',
    templateUrl: './select-folder.component.html',
    styleUrls: ['./select-folder.component.css']
})
export class SelectFolderComponent implements OnInit {
    public treeItems = [];

    @Input() path = '';
    @Input() host;
    @Input() username;
    @Input() password;
    @Output() folderSelected: EventEmitter<any>;
    private error;
    baseFolderIds;
    private generated = false;

    getPath(object){
        let paths = [object.name];
        while(object.parent){
            object = this.treeItems[object.parent];
            paths.push(object.name);
        }
        paths.push('');
        return paths.reverse().join('/');
    }

    getDirectoryList(object = null){
        this.spinnerService.show();
        let path = object ? this.getPath(object) : '/';
        this.backendDataService.getDirectoryList(this.host, this.username, this.password, path, object ? object.id : null, object ? object.level + 1 : 0).then((result) => {
            let minIndex = this.treeItems.length;
            let maxIndex = minIndex + result.length;
            let items = this.treeItems.concat(result);

            if(object && object.id) {
                for(let i = minIndex; i < maxIndex; i++){
                    items[object.id].children.push(i);
                }
                items[object.id].extended = true;
            }else{
                this.baseFolderIds = Object.keys(items);
            }

            for(let i = minIndex; i < maxIndex; i++){
                items[i].id = i;
            }

            this.treeItems = items;
            this.spinnerService.hide();
            this.generated = true;
        }, (err) => {
            this.spinnerService.hide();
            this.error = err;
            return false;
        });
    }

    hideDirectory(object) {
        this.treeItems[object.id].selected = false;
        while(object.parent){
            object = this.treeItems[object.parent];
            this.treeItems[object.id].selected = false;
        }
    }

    selectDirectory(object) {
        this.treeItems[object.id].selected = true;
        if(object.parent){
            this.selectDirectory(this.treeItems[object.parent]);
        }
    }

    deselectDirectory(object) {
        this.treeItems[object.id].selected = false;
        if(object.children){
            for(let c in object.children) {
                if(!object.children.hasOwnProperty(c)) continue;
                this.deselectDirectory(this.treeItems[object.children[c]]);
            }
        }
    }

    //
    constructor(private backendDataService: BackendDataService, public spinnerService: Ng4LoadingSpinnerService) {
        this.folderSelected = new EventEmitter();
    }

    ngOnInit() {
        this.path = '';
        this.getDirectoryList();
        //this.onExpand(['/', '/', 0])
    }

    //
    folderSelect() {
        this.folderSelected.emit(this.path);
    }

    //
    onExpand(params) {
        if (params[1]) {
            this.hideDirectory(params[0])
        } else {
            this.getDirectoryList(params[0])
        }
    }

    onSelect(params) {
        if (params[1]) {
            this.deselectDirectory(params[0]);
        }
        else {
            this.path = this.getPath(params[0]);
            this.selectDirectory(params[0]);
        }
    }
}
