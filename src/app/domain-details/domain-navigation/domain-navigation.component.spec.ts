import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DomainNavigationComponent } from './domain-navigation.component';

describe('DomainNavigationComponent', () => {
  let component: DomainNavigationComponent;
  let fixture: ComponentFixture<DomainNavigationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DomainNavigationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DomainNavigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
