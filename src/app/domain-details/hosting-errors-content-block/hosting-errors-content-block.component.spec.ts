import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HostingErrorsContentBlockComponent } from './hosting-errors-content-block.component';

describe('HostingErrorsContentBlockComponent', () => {
  let component: HostingErrorsContentBlockComponent;
  let fixture: ComponentFixture<HostingErrorsContentBlockComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HostingErrorsContentBlockComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HostingErrorsContentBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
