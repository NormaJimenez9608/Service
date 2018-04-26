import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Pagevalues2Component } from './pagevalues2.component';

describe('Pagevalues2Component', () => {
  let component: Pagevalues2Component;
  let fixture: ComponentFixture<Pagevalues2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Pagevalues2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Pagevalues2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
