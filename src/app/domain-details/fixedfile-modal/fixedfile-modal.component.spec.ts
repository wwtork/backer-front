import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FixedfileModalComponent } from './fixedfile-modal.component';

describe('FixedfileModalComponent', () => {
  let component: FixedfileModalComponent;
  let fixture: ComponentFixture<FixedfileModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FixedfileModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FixedfileModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
