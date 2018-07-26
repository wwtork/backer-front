import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlertsContentBlockComponent } from './alerts-content-block.component';

describe('AlertsContentBlockComponent', () => {
  let component: AlertsContentBlockComponent;
  let fixture: ComponentFixture<AlertsContentBlockComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlertsContentBlockComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlertsContentBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
