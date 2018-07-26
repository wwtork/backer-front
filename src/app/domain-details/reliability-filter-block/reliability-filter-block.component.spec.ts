import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReliabilityFilterBlockComponent } from './reliability-filter-block.component';

describe('ReliabilityFilterBlockComponent', () => {
  let component: ReliabilityFilterBlockComponent;
  let fixture: ComponentFixture<ReliabilityFilterBlockComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReliabilityFilterBlockComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReliabilityFilterBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
