import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PresmodeComponent } from './presmode.component';

describe('PresmodeComponent', () => {
  let component: PresmodeComponent;
  let fixture: ComponentFixture<PresmodeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PresmodeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PresmodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
