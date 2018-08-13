import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RestoreBackupModalComponent } from './restore-backup-modal.component';

describe('RestoreBackupModalComponent', () => {
  let component: RestoreBackupModalComponent;
  let fixture: ComponentFixture<RestoreBackupModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RestoreBackupModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RestoreBackupModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
