import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmailConfirmationWarningComponent } from './email-confirmation-warning.component';

describe('EmailConfirmationWarningComponent', () => {
  let component: EmailConfirmationWarningComponent;
  let fixture: ComponentFixture<EmailConfirmationWarningComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmailConfirmationWarningComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmailConfirmationWarningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
