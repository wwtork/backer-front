import {Component, OnInit, ViewChild} from '@angular/core';
import {ContentBlockComponent} from "../content-block/content-block.component";
import {parameters} from "../../../parameters";

@Component({
    selector: 'app-chart-content-block',
    templateUrl: './chart-content-block.component.html',
    styleUrls: ['./chart-content-block.component.css']
})
export class ChartContentBlockComponent extends ContentBlockComponent implements OnInit {

    @ViewChild("lineChart") lineChart;

    private ctxObject;
    private ctx;
    private step;
    private coord_coef;
    private index = 0;
    private point_radius = 7;
    private points = [];
    private simple_points = [];
    private offset = 20;
    private y_offset = 60;
    private hor_bar;

    private current_chart = 'chart_request';

    private chartDatas = [
        {
            points: [50, 70, 80, 30, 40, 10, 50, 60, 90, 45, 19, 50, 70, 80, 30, 40, 10, 50, 60, 90, 45, 19],
            points_data: [501, 701, 801, 30, 40, 10, 50, 60, 90, 45, 19, 50, 70, 80, 30, 40, 10, 50, 60, 90, 45, 19],
            color: '#46b5ae',
            fill_color: '#ffffff',
            hover_color: '#46b5ae',
            line_weight: 5,
            hoverable: true
        },
        {
            points: [45, 75, 85, 35, 45, 15, 55, 65, 95, 55, 59, 45, 75, 85, 35, 45, 15, 55, 65, 95, 55, 59],
            points_data: [50, 70, 80, 30, 40, 10, 50, 60, 90, 45, 19, 50, 70, 80, 30, 40, 10, 50, 60, 90, 45, 19],
            color: '#8497a5',
            fill_color: '#8497a5',
            hover_color: '#8497a5',
            line_weight: 2,
            hoverable: false
        }
    ];

    protected setDataUri() {
        this.data_uri = parameters.chartUri;
    }

    ngAfterViewInit(){
        this.updateEvent.subscribe(data => this.initDrawChart(data));
    }

    public initDrawChart(data) {
        console.log('draw chart');
        this.ctxObject = this.lineChart.nativeElement;
        this.ctx = this.ctxObject.getContext('2d');
        this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);
        this.hor_bar = this.data['periods'];
        this.step = this.ctx.canvas.width / (this.hor_bar.length);
        this.coord_coef = this.getCoef();
        this.simple_points = [];
        this.points = [];
        this.chartDatas[0].points = [];
        this.chartDatas[1].points = [];
        this.chartDatas[0].points_data = [];
        this.chartDatas[1].points_data = [];
        for(let i in data[this.current_chart]){
            if(data[this.current_chart].hasOwnProperty(i)) {
                this.chartDatas[0].points.push(data[this.current_chart][i]['acc_requests']);
                this.chartDatas[1].points.push(data[this.current_chart][i]['all_requests']);
                this.chartDatas[0].points_data.push(data[this.current_chart][i]['acc_requests']);
                this.chartDatas[1].points_data.push(data[this.current_chart][i]['all_requests']);
            }
        }

       // this.ctxObject.popover({content: 'asd', placement: 'top'});
        this.drawChart();
        this.drawText();
        let chart, i = 0;
        while (chart = this.chartDatas[i++]) {
            this.preparePoints(chart);
        }
        this.drawLines(this.points);
        this.drawLines(this.simple_points);
        this.drawPoints();
        let self = this;
        this.ctx.stroke();
        this.ctxObject.onmousemove = function (e) {
            self.onCanvasHover(e);
        }
    }

    private getCoef() {
        let i = 0, chartData, max = 0, temp = 0;
        while (chartData = this.chartDatas[i++]) {
            temp = Math.max.apply(null, chartData.points);
            if (temp > max) max = temp;
        }

        return (this.ctx.canvas.height - this.offset * 2) / max;

    }

    private isPointHover(x, y, point) {
        return Math.round(Math.sqrt(Math.pow(x - point[0], 2) + Math.pow(y - point[1], 2))) <= this.point_radius;
    }

    private onCanvasHover(e) {
        let rect = this.ctxObject.getBoundingClientRect(),
            x = e.clientX - rect.left,
            y = e.clientY - rect.top,
            i = 0, point;

        while (point = this.points[i++]) {
            if (this.isPointHover(x, y, point)) {
                point[3] = true;
                this.drawPoint(point[0], point[1], point[2], point[2].hover_color);
                this.pointHover(point[4]);
            }
            else {
                if (point[3]) {
                    this.pointUnhover();
                    this.drawPoint(point[0], point[1], point[2], point[2].fill_color);
                    point[3] = false;
                }
            }
        }

    }

    private pointHover(data) {
        // this.ctxObject.data('bs.popover').config.content = data;
        // this.ctxObject.popover('show');
    }

    private pointUnhover() {
        // this.ctxObject.popover('hide');
    }

    private drawText(){
        this.ctx.beginPath();
        for (let r = 0; r < 5; r++) {
            this.ctx.fillText(r * Math.round(this.y_offset / this.coord_coef) + '', 0, this.ctx.canvas.height - r * this.y_offset);
        }
        this.ctx.closePath();
        this.ctx.stroke();
    }

    private drawChart() {
        this.ctx.beginPath();
        this.ctx.strokeStyle = '#cccccc';
        this.ctx.lineWidth = 3;
        this.ctx.moveTo(0, this.ctx.canvas.height - this.offset);
        this.ctx.lineTo(this.ctx.canvas.width - this.offset, this.ctx.canvas.height - this.offset);
        this.ctx.moveTo(0, this.ctx.canvas.height - this.offset);
        this.ctx.lineTo(0, 0);
        this.ctx.closePath();
        this.ctx.stroke();
    }

    private preparePoints(data) {
        for (let i in data.points) {
            this.index = parseInt(i);
            if (data.hoverable)
                this.points.push([this.step * this.index, this.ctx.canvas.height - this.offset - data.points[this.index] * this.coord_coef, data, false, data.points_data[this.index]]);
            else
                this.simple_points.push([this.step * this.index, this.ctx.canvas.height - this.offset - data.points[this.index] * this.coord_coef, data, false, data.points_data[this.index]]);
        }
    }
    private drawLines(points) {
        this.ctx.beginPath();
        let i = 0, point;
        this.ctx.strokeStyle = points[0][2].color;
        this.ctx.lineWidth = points[0][2].line_weight;
        this.ctx.moveTo(0, this.ctx.canvas.height - this.offset);
        while (point = points[i++]) {
            this.ctx.lineTo(point[0], point[1]);
            this.ctx.moveTo(point[0], point[1]);
        }
        this.ctx.closePath();
        this.ctx.stroke();
    }

    private drawPoints() {
        let point, spoint;
        let i = 0;
        while (spoint = this.simple_points[i++]) {
            this.drawPoint(spoint[0], spoint[1], spoint[2], spoint[2].fill_color)
        }
        i = 0;
        while (point = this.points[i++]) {
            this.drawPoint(point[0], point[1], point[2], point[2].fill_color)
        }

    }

    private drawPoint(x, y, data, fill_color) {
        this.ctx.beginPath();
        this.ctx.strokeStyle = data.color;
        this.ctx.fillStyle = fill_color;
        this.ctx.lineWidth = data.line_weight;
        this.ctx.arc(x, y, this.point_radius, 0, 2 * Math.PI);
        this.ctx.closePath();
        this.ctx.stroke();
        this.ctx.fill();
    }


}
