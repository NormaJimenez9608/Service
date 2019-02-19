import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Numunits2Component } from './numunits2.component';

describe('Numunits2Component', () => {
  let component: Numunits2Component;
  let fixture: ComponentFixture<Numunits2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Numunits2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Numunits2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
