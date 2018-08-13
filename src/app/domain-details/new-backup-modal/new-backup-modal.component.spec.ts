import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewBackupModalComponent } from './new-backup-modal.component';

describe('NewBackupModalComponent', () => {
  let component: NewBackupModalComponent;
  let fixture: ComponentFixture<NewBackupModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewBackupModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewBackupModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
