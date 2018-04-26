import { TestBed, inject } from '@angular/core/testing';

import { WritteService } from './writte.service';

describe('WritteService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [WritteService]
    });
  });

  it('should be created', inject([WritteService], (service: WritteService) => {
    expect(service).toBeTruthy();
  }));
});
