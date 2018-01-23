import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImagelogginComponent } from './imageloggin.component';

describe('ImagelogginComponent', () => {
  let component: ImagelogginComponent;
  let fixture: ComponentFixture<ImagelogginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImagelogginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImagelogginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
