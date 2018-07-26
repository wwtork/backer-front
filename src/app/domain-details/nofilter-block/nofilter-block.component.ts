import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-nofilter-block',
  templateUrl: './nofilter-block.component.html',
  styleUrls: ['./nofilter-block.component.css']
})
export class NofilterBlockComponent implements OnInit {


  @Input() siteId: number;
  public has_content: boolean = true;

  ngOnInit() {

  }

}
