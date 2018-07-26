import {Component, OnInit, EventEmitter, Input} from '@angular/core';

@Component({
    selector: 'app-filter-block',
    templateUrl: './filter-block.component.html',
    styleUrls: ['./filter-block.component.css']
})
export class FilterBlockComponent implements OnInit {


    @Input() siteId: number;
    public has_content: boolean = true;


    ngOnInit() {

    }

    public filterEvent: EventEmitter<any> = new EventEmitter();

    protected submitFilter(filter: string = null) {
        this.filterEvent.emit(filter)
    }

}
