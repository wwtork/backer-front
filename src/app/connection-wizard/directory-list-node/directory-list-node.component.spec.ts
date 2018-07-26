import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectoryListNodeComponent } from './directory-list-node.component';

describe('DirectoryListNodeComponent', () => {
  let component: DirectoryListNodeComponent;
  let fixture: ComponentFixture<DirectoryListNodeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DirectoryListNodeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DirectoryListNodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
