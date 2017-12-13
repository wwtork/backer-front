import { Component } from '@angular/core'
import { Input } from '@angular/core'
import { Output } from '@angular/core'
import { EventEmitter } from '@angular/core'

import { Node } from './node'

@Component({
    selector: 'node',
    templateUrl: './node.component.html',
    styleUrls: ['./node.component.css']
})
export class NodeComponent {
    @Input() node: Node;
    @Input() index: number;
    @Output() clicked: EventEmitter<Node>;

    constructor() { this.clicked = new EventEmitter() }

    clickFolderExpand(node: Node) { this.node.isExpanded = !this.node.isExpanded }

    clickItem(node: Node) { this.clicked.emit(node) }

    propagate(node: Node) { this.clicked.emit(node) }
}
