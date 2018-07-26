import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WebscanContentBlockComponent } from './webscan-content-block.component';

describe('WebscanContentBlockComponent', () => {
  let component: WebscanContentBlockComponent;
  let fixture: ComponentFixture<WebscanContentBlockComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WebscanContentBlockComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WebscanContentBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
