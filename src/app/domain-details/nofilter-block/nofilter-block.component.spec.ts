import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NofilterBlockComponent } from './nofilter-block.component';

describe('NofilterBlockComponent', () => {
  let component: NofilterBlockComponent;
  let fixture: ComponentFixture<NofilterBlockComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NofilterBlockComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NofilterBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
