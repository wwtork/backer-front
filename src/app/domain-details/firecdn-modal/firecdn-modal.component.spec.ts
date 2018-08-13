import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FirecdnModalComponent } from './firecdn-modal.component';

describe('FirecdnModalComponent', () => {
  let component: FirecdnModalComponent;
  let fixture: ComponentFixture<FirecdnModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FirecdnModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FirecdnModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
