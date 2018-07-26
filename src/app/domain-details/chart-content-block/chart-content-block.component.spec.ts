import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartContentBlockComponent } from './chart-content-block.component';

describe('ChartContentBlockComponent', () => {
  let component: ChartContentBlockComponent;
  let fixture: ComponentFixture<ChartContentBlockComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChartContentBlockComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChartContentBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
