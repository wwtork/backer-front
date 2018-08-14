import {ChangeDetectorRef, Component, EventEmitter, OnInit} from '@angular/core';
import {Ng4LoadingSpinnerService} from "ng4-loading-spinner";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-domain-details',
  templateUrl: './domain-details.component.html',
  styleUrls: ['./domain-details.component.css']
})
export class DomainDetailsComponent implements OnInit {

  public siteId;
  private sub;

  constructor(private spinnerService: Ng4LoadingSpinnerService, private route:ActivatedRoute, private changeDetectionRef: ChangeDetectorRef) {

  }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.siteId = +params['siteId'];
      this.changeDetectionRef
    });
  }
}
