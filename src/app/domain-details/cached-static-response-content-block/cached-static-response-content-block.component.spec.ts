import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CachedStaticResponseContentBlockComponent } from './cached-static-response-content-block.component';

describe('CachedStaticResponseContentBlockComponent', () => {
  let component: CachedStaticResponseContentBlockComponent;
  let fixture: ComponentFixture<CachedStaticResponseContentBlockComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CachedStaticResponseContentBlockComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CachedStaticResponseContentBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
