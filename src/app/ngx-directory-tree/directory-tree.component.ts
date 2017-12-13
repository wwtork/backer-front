import { Component } from '@angular/core'
import { EventEmitter } from '@angular/core'
import { ElementRef } from '@angular/core'
import { Input } from '@angular/core'
import { Output } from '@angular/core'
import { OnInit } from '@angular/core'

import { Node } from './node'

@Component({
    selector: 'directory-tree',
    templateUrl: './directory-tree.component.html',
    styleUrls: ['./directory-tree.component.css'],
    host: {
        '(window:keydown)': 'keydownHandler($event)'
    }
})
export class DirectoryTreeComponent implements OnInit {
    @Input() directory: Node;
    @Input() keyboardWatch: boolean;
    @Output() onChange: EventEmitter<Node>;

    currFocusNode: Node;

    constructor(private _eref: ElementRef) {
        this.onChange = new EventEmitter();
        this.keyboardWatch = false
    }

    ngOnInit() {
        this.directory = new Node(this.directory);
        this.currFocusNode = null
    }

    nodeClicked(nextNode: Node) {
        this.updateFocusNode(nextNode);
        this.onChange.emit(nextNode);
    }

    keydownHandler(event: KeyboardEvent) {
        if (!this.keyboardWatch) return;
        if (this.currFocusNode === null) return;

        switch (event.keyCode) {
            case 13: // Enter
                this.onChange.emit(this.currFocusNode);
                break;
            case 37: // left
                if (this.currFocusNode.isFolder
                    && this.currFocusNode.isExpanded) {
                    this.currFocusNode.isExpanded = false;
                    return;
                }
                if (!this.currFocusNode.hasParent()) return;
                this.updateFocusNode(this.currFocusNode.parent);
                break;
            case 38: // Up
                // Move to upper item
                break;
            case 39: // Right
                if (!this.currFocusNode.isFolder) return;
                if (!this.currFocusNode.isExpanded) {
                    this.currFocusNode.isExpanded = true;
                } else if (this.currFocusNode.children.length > 0) {
                    this.updateFocusNode(this.currFocusNode.children[0]);
                }
                break;
            case 40: // Down
                if (this.currFocusNode.isFolder
                    && this.currFocusNode.isExpanded
                    && this.currFocusNode.children.length > 0) {
                    // first child
                    this.updateFocusNode(this.currFocusNode.children[0]);
                } else {
                    // next sibling
                }
                break
        }
    }

    private updateFocusNode(next: Node) {
        if (this.currFocusNode) {
            this.currFocusNode._focus = false;
        }
        this.currFocusNode = next;
        this.currFocusNode._focus = true;
    }
}
