import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BackupFilterBlockComponent } from './backup-filter-block.component';

describe('BackupFilterBlockComponent', () => {
  let component: BackupFilterBlockComponent;
  let fixture: ComponentFixture<BackupFilterBlockComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BackupFilterBlockComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BackupFilterBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
