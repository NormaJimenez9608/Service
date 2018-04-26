import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Values2Component } from './values2.component';

describe('Values2Component', () => {
  let component: Values2Component;
  let fixture: ComponentFixture<Values2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Values2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Values2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
