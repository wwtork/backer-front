import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChooseTariffComponent } from './choose-tariff.component';

describe('ChooseTariffComponent', () => {
  let component: ChooseTariffComponent;
  let fixture: ComponentFixture<ChooseTariffComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChooseTariffComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChooseTariffComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
