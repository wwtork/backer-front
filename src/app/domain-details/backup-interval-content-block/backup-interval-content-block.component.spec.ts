import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BackupIntervalContentBlockComponent } from './backup-interval-content-block.component';

describe('BackupIntervalContentBlockComponent', () => {
  let component: BackupIntervalContentBlockComponent;
  let fixture: ComponentFixture<BackupIntervalContentBlockComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BackupIntervalContentBlockComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BackupIntervalContentBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
