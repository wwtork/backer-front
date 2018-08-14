import {Component, EventEmitter, Input, OnInit} from '@angular/core';
import {Ng4LoadingSpinnerService} from "ng4-loading-spinner";
import {BackendDataService} from "../../backend-data.service";
import {NofilterBlockComponent} from "../nofilter-block/nofilter-block.component";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'app-nofilter-content-block',
  templateUrl: './nofilter-content-block.component.html',
  styleUrls: ['./nofilter-content-block.component.css']
})
export class NofilterContentBlockComponent implements OnInit {

  protected data: object = {};
  protected data_uri: string;
  protected error: any;
  @Input() siteId: number;
  @Input() parent: NofilterBlockComponent;

  public updateEvent: EventEmitter<any> = new EventEmitter();

  constructor(private modalService: NgbModal, protected spinnerService: Ng4LoadingSpinnerService, protected backendDataService: BackendDataService) {

  }

  protected updateContent() {
    if(!this.data_uri) return;
    this.backendDataService.getContentBlockData(this.data_uri.replace('{siteId}', this.siteId.toString()), null).then((result) => {
      this.data = result;
      this.updateEvent.emit(result);
    }, (err) => {
      this.error = err;
      return false;
    });
  }

  protected setDataUri(){

  }

  ngOnChanges() {
    this.setDataUri();
    this.updateContent();
  }

  ngOnInit() {
    this.setDataUri();
    this.updateContent();
  }

  public openModal(component, entity){
    let modalRef = this.modalService.open(component);
    modalRef.componentInstance.entity = entity;
    modalRef.componentInstance.siteId = this.siteId;
    modalRef.result.then(
        (result) => {
          this.processModalResult(result);
        },
        (result: string) => {

        }
    );
  }

  public processModalResult(result) {
  }

}