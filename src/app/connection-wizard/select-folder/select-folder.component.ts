import {Component, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
// import {NodeRegion} from "../../dns-settings/node-region";
import {Ng4LoadingSpinnerService} from "ng4-loading-spinner";
import {BackendDataService} from "../backend-data.service";
import {DirectoryTreeComponent} from "../../ngx-directory-tree/directory-tree.component";
import {TreeviewComponent, TreeviewItem} from "ngx-treeview";
import {WsrTreeViewComponent} from "../../wsr-treeview/wsr-treeview.component";

@Component({
    selector: 'app-select-folder',
    templateUrl: './select-folder.component.html',
    styleUrls: ['./select-folder.component.css']
})
export class SelectFolderComponent implements OnInit {
    @ViewChild(WsrTreeViewComponent) treeviewComponent: WsrTreeViewComponent;
    public treeItems = [new TreeviewItem({text: '/', value:'/', children: [], checked: true})];
    // value: NodeRegion[];

    public

    readonly twConfig = {
        hasAllCheckBox: false,
        hasFilter: false,
        hasCollapseExpand: true,
        decoupleChildFromParent: false,
        maxHeight: 500
    };

    @Input() path = '';
    @Input() serverId;
    @Output() folderSelected: EventEmitter<any>;
    private error;
    private treeObject = [];
    private generated = false;
    private currentItem;

    updateTreeObject(result, path = null) {
        console.log(path);
        let parent = this.treeObject;
        let keys = path ? path.split('/') : null;
        if(keys){
            for(let i in keys){
                if(!keys.hasOwnProperty(i)) continue;
                if(keys[i] == "") continue;
                if(parent['children'].hasOwnProperty(keys[i]))
                    parent = parent['children'][keys[i]];
            }
        }
        result = result.children;
        for (let f in result){
            if(!result.hasOwnProperty(f)) continue;
            if(!parent['children']) parent['children'] = {};
            parent['children'][result[f]['name']] = {text: result[f]['name'], value: result[f]['name']};
        }
        this.updateTreeArray(null, parent['children']);
    }

    updateTreeArray(treeItem = null, objects = null){
        if(treeItem === null){
            // this.treeItems = {name: '/', type: "dir", children: [], expanded: true};
            treeItem = this.currentItem ? this.currentItem : this.treeItems[0];
        }

        if(!objects) objects = this.treeObject['children'];
        let cnt = 0;
        let item;
        for(let i in objects){
            if(!objects.hasOwnProperty(i)) continue;
            item = new TreeviewItem({text: objects[i].text, value: objects[i].value, checked: false});
            if(!treeItem.children) {
                treeItem.children = [item];
            }
            else treeItem.children.push(item);
            // treeItem.push({name: objects[i].text, type: "dir", children: [], expanded: false});
            if(objects[i].children){
                // console.log(treeItem);
                // console.log(treeItem[cnt]);
                this.updateTreeArray(treeItem.children[cnt], objects[i].children);
            }
            cnt++;
        }
    }

    getDirectoryList(path = null){
        this.spinnerService.show();
        this.backendDataService.getDirectoryList(this.serverId, path).then((result) => {
            if(!result) result = [new TreeviewItem({text: '/', value:'/', children: [], checked: true})];
            // this.treeItems = result;
            this.updateTreeObject(result, path);
            this.spinnerService.hide();
            this.generated = true;
        }, (err) => {
            this.error = err;
            this.treeItems = [new TreeviewItem({text: '/', value:'/', children: [], checked: true})];
            return false;
        });
    }

    constructor(private backendDataService:BackendDataService, public spinnerService: Ng4LoadingSpinnerService) {
        this.folderSelected = new EventEmitter();
    }

    ngOnInit() {
        this.path = '';
        // this.getDirectoryList();

    }

    folderSelect() {
        this.folderSelected.emit(this.path);
    }

    onSelect(node: TreeviewItem[]){
        this.path = '';
        if(node.length == 0 || node[node.length - 1].text == '/') return;
        let checked = this.treeviewComponent.selection.checkedItems;
        this.currentItem = checked[checked.length - 1];
        console.log(this.currentItem);
        for(let i in node){
            if(node[i]) {
                this.path += node[i] + '/';
            }
        }
        console.log(this.path);
        this.getDirectoryList('/' + this.path);

        // let path = node.name;
        // let parent = node._parent;
        // while(parent != null){
        //     console.log(parent);
        //     path = parent.name + '/' + path;
        //     parent = parent._parent;
        // }
        // this.path = path;
        //this.getDirectoryList('/' + node.name);
    }

}
