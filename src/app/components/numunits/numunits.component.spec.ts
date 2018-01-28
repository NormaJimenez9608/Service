import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NumunitsComponent } from './numunits.component';

describe('NumunitsComponent', () => {
  let component: NumunitsComponent;
  let fixture: ComponentFixture<NumunitsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NumunitsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NumunitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
