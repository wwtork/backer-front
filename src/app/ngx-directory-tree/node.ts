export class Node {
    name: string;
    //path: string
    //mode: string
    type: string;
    //sha: string
    //size: number
    children: Array<Node>;
    _parent: Node;
    _focus: boolean;
    _is_folder: boolean;
    _is_expanded: boolean;
    _params: Object;

    constructor(opts:{
        name?: string,
        path?: string,
        mode?: string,
        type?: string,
        sha?: string,
        size?: number,
        children?: Array<Node>,
        _focus?: boolean,
        expanded?: boolean
    } = {}, parent: Node = null) {
        //this.path = opts.path || ''
        this.name = opts.name || opts.path;
        //this.mode = opts.mode || ''
        this.type = opts.type || '';
        //this.sha = opts.sha || ''
        //this.size = opts.size

        this.children = opts.children || [];
        let _children: Array<Node> = [];
        this.children.forEach((node) => _children.push(new Node(node, this)));
        this.children = _children;

        this._params = opts;
        this._parent = parent;
        this._focus = opts._focus || false;
        // TODO need to consider the type variable
        this._is_folder = this.type === 'dir' || this.children.length > 0;
        this._is_expanded = opts.expanded && (this.type === 'dir' || this.children.length > 0);
    }

    public isDir(): boolean {
        return this.type === 'dir' || this.children.length > 0;
    }

    get params(): Object { return this.params; }
    set params(p: Object) { this.params = p; }

    get parent(): Node { return this._parent; }
    set parent(n: Node) { this._parent = n; }

    get isFolder(): boolean { return this._is_folder; }

    get isExpanded(): boolean { return this._is_expanded; }
    set isExpanded(t: boolean) { this._is_expanded = t; }

    public hasParent(): boolean { return this.parent !== null || typeof (this.parent) === 'undefined'; }

    public focus() { this._focus = true; }

    public blur() { this._focus = false; }

    public stringify() {
        return JSON.stringify(this, (key: string, value: any) => {
            if (key.includes('_')) return;
            return value;
        })
    }
}
