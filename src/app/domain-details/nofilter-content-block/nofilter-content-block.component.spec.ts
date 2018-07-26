import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NofilterContentBlockComponent } from './nofilter-content-block.component';

describe('NofilterContentBlockComponent', () => {
  let component: NofilterContentBlockComponent;
  let fixture: ComponentFixture<NofilterContentBlockComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NofilterContentBlockComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NofilterContentBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
