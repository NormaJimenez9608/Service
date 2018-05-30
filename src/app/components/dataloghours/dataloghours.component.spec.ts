import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DataloghoursComponent } from './dataloghours.component';

describe('DataloghoursComponent', () => {
  let component: DataloghoursComponent;
  let fixture: ComponentFixture<DataloghoursComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DataloghoursComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DataloghoursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
