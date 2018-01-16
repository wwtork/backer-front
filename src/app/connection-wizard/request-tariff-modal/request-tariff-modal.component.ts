import {Component, Input, OnInit} from '@angular/core';
import {AuthenticationService} from "../../authentication/authentication.service";

@Component({
  selector: 'app-request-tariff-modal',
  templateUrl: './request-tariff-modal.component.html',
  styleUrls: ['./request-tariff-modal.component.css']
})
export class RequestTariffModalComponent implements OnInit {

  @Input() activeModal;
  @Input() settings;
  question;
  email;

  constructor() {
      this.email = AuthenticationService.getUser().email;
  }

  ngOnInit() {
  }

}
