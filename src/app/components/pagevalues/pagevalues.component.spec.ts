import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PagevaluesComponent } from './pagevalues.component';

describe('PagevaluesComponent', () => {
  let component: PagevaluesComponent;
  let fixture: ComponentFixture<PagevaluesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PagevaluesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PagevaluesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
