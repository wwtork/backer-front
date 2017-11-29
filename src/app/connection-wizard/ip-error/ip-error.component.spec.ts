import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IpErrorComponent } from './ip-error.component';

describe('IpErrorComponent', () => {
  let component: IpErrorComponent;
  let fixture: ComponentFixture<IpErrorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IpErrorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IpErrorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
