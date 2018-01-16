import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FtpErrorModalComponent } from './ftp-error-modal.component';

describe('FtpErrorModalComponent', () => {
  let component: FtpErrorModalComponent;
  let fixture: ComponentFixture<FtpErrorModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FtpErrorModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FtpErrorModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
