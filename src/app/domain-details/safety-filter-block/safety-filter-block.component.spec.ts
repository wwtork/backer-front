import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SafetyFilterBlockComponent } from './safety-filter-block.component';

describe('SafetyFilterBlockComponent', () => {
  let component: SafetyFilterBlockComponent;
  let fixture: ComponentFixture<SafetyFilterBlockComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SafetyFilterBlockComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SafetyFilterBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
