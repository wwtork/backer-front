import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MessagesFilterBlockComponent } from './messages-filter-block.component';

describe('MessagesFilterBlockComponent', () => {
  let component: MessagesFilterBlockComponent;
  let fixture: ComponentFixture<MessagesFilterBlockComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MessagesFilterBlockComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MessagesFilterBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
