import {Component, Input, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {parameters} from "../../../parameters";
import {BackendDataService} from "../../backend-data.service";
import {EventEmitter} from "events";

@Component({
  selector: 'app-domain-navigation',
  templateUrl: './domain-navigation.component.html',
  styleUrls: ['./domain-navigation.component.css']
})
export class DomainNavigationComponent implements OnInit {

  @Input() currentSiteId: number;

  protected sites = {};

  constructor(private router: Router, private backendDataService:BackendDataService) { }

  ngOnInit() {
    this.backendDataService.securedPost(parameters.getSiteListUri).then((result) => {
      this.sites = result['sites'];
    }, (err) => {
      return false;
    });
  }

  protected navigate(siteId){
      this.router.navigate(['domain-details', siteId ]);
  }

}
