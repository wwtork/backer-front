import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SslCheckComponent } from './ssl-check.component';

describe('SslCheckComponent', () => {
  let component: SslCheckComponent;
  let fixture: ComponentFixture<SslCheckComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SslCheckComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SslCheckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
