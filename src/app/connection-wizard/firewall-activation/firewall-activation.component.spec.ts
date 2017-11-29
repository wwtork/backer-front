import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FirewallActivationComponent } from './firewall-activation.component';

describe('FirewallActivationComponent', () => {
  let component: FirewallActivationComponent;
  let fixture: ComponentFixture<FirewallActivationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FirewallActivationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FirewallActivationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
