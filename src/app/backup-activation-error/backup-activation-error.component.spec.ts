import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BackupActivationErrorComponent } from './backup-activation-error.component';

describe('BackupActivationErrorComponent', () => {
  let component: BackupActivationErrorComponent;
  let fixture: ComponentFixture<BackupActivationErrorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BackupActivationErrorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BackupActivationErrorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
