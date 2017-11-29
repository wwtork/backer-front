import { Input, EventEmitter, Output, Component, OnInit } from '@angular/core';
import {HostingStage} from "../model/hosting-stage";
import {Method} from "../model/method";

@Component({
    selector: 'app-method',
    templateUrl: './method.component.html',
    styleUrls: ['./method.component.css']
})
export class MethodComponent implements OnInit {

    @Input() method:Method;
    @Output() buttonClick:EventEmitter<any>;

    constructor() {
        this.buttonClick = new EventEmitter();
    }

    ngOnInit() {
    }

    onClick() {
        this.buttonClick.emit();
    }

}
