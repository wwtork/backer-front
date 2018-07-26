import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MessagesContentBlockComponent } from './messages-content-block.component';

describe('MessagesContentBlockComponent', () => {
  let component: MessagesContentBlockComponent;
  let fixture: ComponentFixture<MessagesContentBlockComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MessagesContentBlockComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MessagesContentBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
