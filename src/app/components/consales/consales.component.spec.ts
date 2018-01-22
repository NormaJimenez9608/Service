import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsalesComponent } from './consales.component';

describe('ConsalesComponent', () => {
  let component: ConsalesComponent;
  let fixture: ComponentFixture<ConsalesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsalesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
