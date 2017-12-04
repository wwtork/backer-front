import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DnsSettingsComponent } from './dns-settings.component';

describe('DnsSettingsComponent', () => {
  let component: DnsSettingsComponent;
  let fixture: ComponentFixture<DnsSettingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DnsSettingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DnsSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
