import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangesControlContentBlockComponent } from './changes-control-content-block.component';

describe('ChangesControlContentBlockComponent', () => {
  let component: ChangesControlContentBlockComponent;
  let fixture: ComponentFixture<ChangesControlContentBlockComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChangesControlContentBlockComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChangesControlContentBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
