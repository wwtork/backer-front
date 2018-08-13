export class Filter {
    since:string = null;
    till:string = null;
    period:string = '1 day';

    constructor(since, till, period){
        this.since = since;
        this.till = till;
        this.period = period;
    }
}
