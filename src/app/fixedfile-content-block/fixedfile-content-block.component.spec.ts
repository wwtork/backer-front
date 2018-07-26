import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FixedfileContentBlockComponent } from './fixedfile-content-block.component';

describe('FixedfileContentBlockComponent', () => {
  let component: FixedfileContentBlockComponent;
  let fixture: ComponentFixture<FixedfileContentBlockComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FixedfileContentBlockComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FixedfileContentBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
