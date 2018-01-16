import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuyTariffModalComponent } from './buy-tariff-modal.component';

describe('BuyTariffModalComponent', () => {
  let component: BuyTariffModalComponent;
  let fixture: ComponentFixture<BuyTariffModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuyTariffModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuyTariffModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
