import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HostingAccessComponent } from './hosting-access.component';

describe('HostingAccessComponent', () => {
  let component: HostingAccessComponent;
  let fixture: ComponentFixture<HostingAccessComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HostingAccessComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HostingAccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
