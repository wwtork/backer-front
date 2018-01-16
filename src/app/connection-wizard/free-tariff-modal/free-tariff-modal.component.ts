import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-free-tariff-modal',
  templateUrl: './free-tariff-modal.component.html',
  styleUrls: ['./free-tariff-modal.component.css']
})
export class FreeTariffModalComponent implements OnInit {

  @Input() activeModal;

  constructor() { }

  ngOnInit() {
  }

}
