import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DbBackupContentBlockComponent } from './db-backup-content-block.component';

describe('DbBackupContentBlockComponent', () => {
  let component: DbBackupContentBlockComponent;
  let fixture: ComponentFixture<DbBackupContentBlockComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DbBackupContentBlockComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DbBackupContentBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
