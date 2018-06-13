import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlldatalogsComponent } from './alldatalogs.component';

describe('AlldatalogsComponent', () => {
  let component: AlldatalogsComponent;
  let fixture: ComponentFixture<AlldatalogsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlldatalogsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlldatalogsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
