import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FileBackupContentBlockComponent } from './file-backup-content-block.component';

describe('FileBackupContentBlockComponent', () => {
  let component: FileBackupContentBlockComponent;
  let fixture: ComponentFixture<FileBackupContentBlockComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FileBackupContentBlockComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FileBackupContentBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
