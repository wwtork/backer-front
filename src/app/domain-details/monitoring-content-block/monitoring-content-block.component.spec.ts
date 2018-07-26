import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MonitoringContentBlockComponent } from './monitoring-content-block.component';

describe('MonitoringContentBlockComponent', () => {
  let component: MonitoringContentBlockComponent;
  let fixture: ComponentFixture<MonitoringContentBlockComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MonitoringContentBlockComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MonitoringContentBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
