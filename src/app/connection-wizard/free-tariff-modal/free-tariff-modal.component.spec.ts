import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FreeTariffModalComponent } from './free-tariff-modal.component';

describe('FreeTariffModalComponent', () => {
  let component: FreeTariffModalComponent;
  let fixture: ComponentFixture<FreeTariffModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FreeTariffModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FreeTariffModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
