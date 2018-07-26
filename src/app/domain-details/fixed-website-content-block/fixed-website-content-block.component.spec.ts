import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FixedWebsiteContentBlockComponent } from './fixed-website-content-block.component';

describe('FixedWebsiteContentBlockComponent', () => {
  let component: FixedWebsiteContentBlockComponent;
  let fixture: ComponentFixture<FixedWebsiteContentBlockComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FixedWebsiteContentBlockComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FixedWebsiteContentBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
