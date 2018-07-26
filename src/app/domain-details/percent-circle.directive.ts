import {Directive, ElementRef, EventEmitter, Input} from '@angular/core';

@Directive({
    selector: '[appPercentCircle]',
})
export class PercentCircleDirective {
    
    @Input('updateEvent') updateEvent:EventEmitter<any>;

    private percentage = 0;
    
    updateProgress(data){
        this.percentage = Math.round(data.percent / 10) * 10;
        switch (this.percentage) {
            case 10:
                this.el.nativeElement.querySelector('.progress-right .progress-bar').style.animation = 'loading-1 1.5s linear forwards';
                this.el.nativeElement.querySelector('.progress-right .progress-bar').style.borderColor = '#f4545c';
                this.el.nativeElement.querySelector('.progress-left .progress-bar').style.animation = 0;
                this.el.nativeElement.querySelector('.progress-value').style.color = '#f4545c';
                break;
            case 20:
                this.el.nativeElement.querySelector('.progress-right .progress-bar').style.animation = 'loading-2 1.5s linear forwards';
                this.el.nativeElement.querySelector('.progress-right .progress-bar').style.borderColor = '#f4545c';
                this.el.nativeElement.querySelector('.progress-left .progress-bar').style.animation = 0;
                this.el.nativeElement.querySelector('.progress-value').style.color = '#f4545c';
                break;
            case 30:
                this.el.nativeElement.querySelector('.progress-right .progress-bar').style.animation = 'loading-3 1.5s linear forwards';
                this.el.nativeElement.querySelector('.progress-right .progress-bar').style.borderColor = '#f4545c';
                this.el.nativeElement.querySelector('.progress-left .progress-bar').style.animation = 0;
                this.el.nativeElement.querySelector('.progress-value').style.color = '#f4545c';
                break;
            case 40:
                this.el.nativeElement.querySelector('.progress-right .progress-bar').style.animation = 'loading-4 1.5s linear forwards';
                this.el.nativeElement.querySelector('.progress-right .progress-bar').style.borderColor = '#f4545c';
                this.el.nativeElement.querySelector('.progress-left .progress-bar').style.animation = 0;
                this.el.nativeElement.querySelector('.progress-value').style.color = '#f4545c';
                break;
            case 50:
                this.el.nativeElement.querySelector('.progress-right .progress-bar').style.animation = 'loading-5 1.5s linear forwards';
                this.el.nativeElement.querySelector('.progress-right .progress-bar').style.borderColor = '#f4545c';
                this.el.nativeElement.querySelector('.progress-left .progress-bar').style.animation = 0;
                this.el.nativeElement.querySelector('.progress-value').style.color = '#f4545c';
                break;
            case 60:
                this.el.nativeElement.querySelector('.progress-right .progress-bar').style.animation = 'loading-5 1.5s linear forwards';
                this.el.nativeElement.querySelector('.progress-right .progress-bar').style.borderColor = '#6abed6';
                this.el.nativeElement.querySelector('.progress-left .progress-bar').style.animation = 'loading-1 1.5s linear forwards 1.5s';
                this.el.nativeElement.querySelector('.progress-left .progress-bar').style.borderColor = '#6abed6';
                this.el.nativeElement.querySelector('.progress-value').style.color = '#6abed6';
                break;
            case 70:
                this.el.nativeElement.querySelector('.progress-right .progress-bar').style.animation = 'loading-5 1.5s linear forwards';
                this.el.nativeElement.querySelector('.progress-right .progress-bar').style.borderColor = '#6abed6';
                this.el.nativeElement.querySelector('.progress-left .progress-bar').style.animation = 'loading-2 1.5s linear forwards 1.5s';
                this.el.nativeElement.querySelector('.progress-left .progress-bar').style.borderColor = '#6abed6';
                this.el.nativeElement.querySelector('.progress-value').style.color = '#6abed6';
                break;
            case 80:
                this.el.nativeElement.querySelector('.progress-right .progress-bar').style.animation = 'loading-5 1.5s linear forwards';
                this.el.nativeElement.querySelector('.progress-right .progress-bar').style.borderColor = '#6abed6';
                this.el.nativeElement.querySelector('.progress-left .progress-bar').style.animation = 'loading-3 1.5s linear forwards 1.5s';
                this.el.nativeElement.querySelector('.progress-left .progress-bar').style.borderColor = '#6abed6';
                this.el.nativeElement.querySelector('.progress-value').style.color = '#6abed6';
                break;
            case 90:
                this.el.nativeElement.querySelector('.progress-right .progress-bar').style.animation = 'loading-5 1.5s linear forwards';
                this.el.nativeElement.querySelector('.progress-right .progress-bar').style.borderColor = '#6abed6';
                this.el.nativeElement.querySelector('.progress-left .progress-bar').style.animation = 'loading-4 1.5s linear forwards 1.5s';
                this.el.nativeElement.querySelector('.progress-left .progress-bar').style.borderColor = '#6abed6';
                this.el.nativeElement.querySelector('.progress-value').style.color = '#6abed6';
                break;
            case 100:
                this.el.nativeElement.querySelector('.progress-right .progress-bar').style.animation = 'loading-5 1.5s linear forwards';
                this.el.nativeElement.querySelector('.progress-right .progress-bar').style.borderColor = '#6abed6';
                this.el.nativeElement.querySelector('.progress-left .progress-bar').style.animation = 'loading-5 1.5s linear forwards 1.5s';
                this.el.nativeElement.querySelector('.progress-left .progress-bar').style.borderColor = '#6abed6';
                this.el.nativeElement.querySelector('.progress-value').style.color = '#6abed6';
                break;
            default:
                break;
        }
    }

    ngOnInit() {
        this.updateEvent.subscribe(data => this.updateProgress(data));
    }

    constructor(private el: ElementRef) {

    }
}
