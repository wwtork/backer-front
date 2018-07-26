import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewBackupContentBlockComponent } from './new-backup-content-block.component';

describe('NewBackupContentBlockComponent', () => {
  let component: NewBackupContentBlockComponent;
  let fixture: ComponentFixture<NewBackupContentBlockComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewBackupContentBlockComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewBackupContentBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
