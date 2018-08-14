import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Filter} from "../filter";

@Component({
    selector: 'app-date-filter',
    templateUrl: './date-filter.component.html',
    styleUrls: ['./date-filter.component.css']
})
export class DateFilterComponent implements OnInit {

    current_period = 'day';
    static periods = {
        'day': '-1 day',
        'week': '-7 days',
        'month': '-1 month'
    };

    @Output() filterSubmitted = new EventEmitter<Filter>();

    constructor() {
    }


    ngOnInit() {
        let filter = new Filter(null, null, DateFilterComponent.periods[this.current_period]);
        this.filterSubmitted.emit(filter);
    }

    submitFilter(since: string, till: string, period: string) {
        if (period) {
            this.current_period = period;
        }
        let filter = new Filter(since, till, DateFilterComponent.periods[period]);
        this.filterSubmitted.emit(filter);
    }

}
