import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewDomainModalComponent } from './new-domain-modal.component';

describe('NewDomainModalComponent', () => {
  let component: NewDomainModalComponent;
  let fixture: ComponentFixture<NewDomainModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewDomainModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewDomainModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
