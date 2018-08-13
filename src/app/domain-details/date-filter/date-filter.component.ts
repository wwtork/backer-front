import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Filter} from "../filter";

@Component({
  selector: 'app-date-filter',
  templateUrl: './date-filter.component.html',
  styleUrls: ['./date-filter.component.css']
})
export class DateFilterComponent implements OnInit {

  constructor() { }

  current_period = 'day';

  static periods = {
      '-1 day': 'day',
      '-7 days': 'week',
      '-1 month': 'month'
  };

  @Output() filterSubmitted = new EventEmitter<Filter>();

  ngOnInit() {
  }

  submitFilter(since:string, till:string, period:string){
      if(period){
          this.current_period = DateFilterComponent.periods[period];
      }
      let filter = new Filter(since, till, period);
      this.filterSubmitted.emit(filter);
  }

}
