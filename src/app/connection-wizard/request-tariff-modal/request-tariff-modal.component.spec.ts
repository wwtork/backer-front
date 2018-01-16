import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestTariffModalComponent } from './request-tariff-modal.component';

describe('RequestTariffModalComponent', () => {
  let component: RequestTariffModalComponent;
  let fixture: ComponentFixture<RequestTariffModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RequestTariffModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RequestTariffModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
