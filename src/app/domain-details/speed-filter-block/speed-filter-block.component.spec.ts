import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpeedFilterBlockComponent } from './speed-filter-block.component';

describe('SpeedFilterBlockComponent', () => {
  let component: SpeedFilterBlockComponent;
  let fixture: ComponentFixture<SpeedFilterBlockComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpeedFilterBlockComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpeedFilterBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
