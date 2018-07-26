import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SslContentBlockComponent } from './ssl-content-block.component';

describe('SslContentBlockComponent', () => {
  let component: SslContentBlockComponent;
  let fixture: ComponentFixture<SslContentBlockComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SslContentBlockComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SslContentBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
