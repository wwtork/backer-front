import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SslDownloadComponent } from './ssl-download.component';

describe('SslDownloadComponent', () => {
  let component: SslDownloadComponent;
  let fixture: ComponentFixture<SslDownloadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SslDownloadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SslDownloadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
