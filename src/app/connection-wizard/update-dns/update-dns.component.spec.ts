import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateDnsComponent } from './update-dns.component';

describe('UpdateDnsComponent', () => {
  let component: UpdateDnsComponent;
  let fixture: ComponentFixture<UpdateDnsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateDnsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateDnsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
