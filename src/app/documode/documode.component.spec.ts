import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DocumodeComponent } from './documode.component';

describe('DocumodeComponent', () => {
  let component: DocumodeComponent;
  let fixture: ComponentFixture<DocumodeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DocumodeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DocumodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
