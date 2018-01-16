import {Component, Input, OnInit} from '@angular/core';
import {NgbActiveModal} from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'app-ftp-error-modal',
  templateUrl: './ftp-error-modal.component.html',
  styleUrls: ['./ftp-error-modal.component.css']
})
export class FtpErrorModalComponent implements OnInit {

  @Input() activeModal;

  constructor() { }

  ngOnInit() {
  }

}
