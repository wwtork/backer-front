import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AutoSetupComponent } from './auto-setup.component';

describe('AutoSetupComponent', () => {
  let component: AutoSetupComponent;
  let fixture: ComponentFixture<AutoSetupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AutoSetupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AutoSetupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
