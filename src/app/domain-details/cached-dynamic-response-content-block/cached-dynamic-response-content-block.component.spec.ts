import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CachedDynamicResponseContentBlockComponent } from './cached-dynamic-response-content-block.component';

describe('CachedDynamicResponseContentBlockComponent', () => {
  let component: CachedDynamicResponseContentBlockComponent;
  let fixture: ComponentFixture<CachedDynamicResponseContentBlockComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CachedDynamicResponseContentBlockComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CachedDynamicResponseContentBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
