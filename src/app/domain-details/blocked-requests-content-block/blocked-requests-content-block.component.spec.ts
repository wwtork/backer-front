import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlockedRequestsContentBlockComponent } from './blocked-requests-content-block.component';

describe('BlockedRequestsContentBlockComponent', () => {
  let component: BlockedRequestsContentBlockComponent;
  let fixture: ComponentFixture<BlockedRequestsContentBlockComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlockedRequestsContentBlockComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlockedRequestsContentBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
