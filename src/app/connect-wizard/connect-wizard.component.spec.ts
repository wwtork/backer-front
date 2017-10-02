import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConnectWizardComponent } from './connect-wizard.component';

describe('ConnectWizardComponent', () => {
  let component: ConnectWizardComponent;
  let fixture: ComponentFixture<ConnectWizardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConnectWizardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConnectWizardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
