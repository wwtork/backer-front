import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConnectStateComponent } from './connect-state.component';

describe('ConnectStateComponent', () => {
  let component: ConnectStateComponent;
  let fixture: ComponentFixture<ConnectStateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConnectStateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConnectStateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
