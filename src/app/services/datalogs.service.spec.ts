import { TestBed, inject } from '@angular/core/testing';

import { DatalogsService } from './datalogs.service';

describe('DatalogsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DatalogsService]
    });
  });

  it('should be created', inject([DatalogsService], (service: DatalogsService) => {
    expect(service).toBeTruthy();
  }));
});
