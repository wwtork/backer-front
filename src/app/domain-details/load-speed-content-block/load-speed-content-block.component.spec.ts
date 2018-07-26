import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoadSpeedContentBlockComponent } from './load-speed-content-block.component';

describe('LoadSpeedContentBlockComponent', () => {
  let component: LoadSpeedContentBlockComponent;
  let fixture: ComponentFixture<LoadSpeedContentBlockComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoadSpeedContentBlockComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoadSpeedContentBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
