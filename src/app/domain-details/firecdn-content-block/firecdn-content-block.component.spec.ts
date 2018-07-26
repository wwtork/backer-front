import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FirecdnContentBlockComponent } from './firecdn-content-block.component';

describe('FirecdnContentBlockComponent', () => {
  let component: FirecdnContentBlockComponent;
  let fixture: ComponentFixture<FirecdnContentBlockComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FirecdnContentBlockComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FirecdnContentBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
