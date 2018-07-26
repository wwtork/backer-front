import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AcceleratedRequestsContentBlockComponent } from './accelerated-requests-content-block.component';

describe('AcceleratedRequestsContentBlockComponent', () => {
  let component: AcceleratedRequestsContentBlockComponent;
  let fixture: ComponentFixture<AcceleratedRequestsContentBlockComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AcceleratedRequestsContentBlockComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AcceleratedRequestsContentBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
