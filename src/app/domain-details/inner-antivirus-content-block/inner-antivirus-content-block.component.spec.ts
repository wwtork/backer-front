import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InnerAntivirusContentBlockComponent } from './inner-antivirus-content-block.component';

describe('InnerAntivirusContentBlockComponent', () => {
  let component: InnerAntivirusContentBlockComponent;
  let fixture: ComponentFixture<InnerAntivirusContentBlockComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InnerAntivirusContentBlockComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InnerAntivirusContentBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
