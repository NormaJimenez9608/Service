import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PagedevicesComponent } from './pagedevices.component';

describe('PagedevicesComponent', () => {
  let component: PagedevicesComponent;
  let fixture: ComponentFixture<PagedevicesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PagedevicesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PagedevicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
