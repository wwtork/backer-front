import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BackupActivationComponent } from './backup-activation.component';

describe('BackupActivationComponent', () => {
  let component: BackupActivationComponent;
  let fixture: ComponentFixture<BackupActivationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BackupActivationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BackupActivationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
