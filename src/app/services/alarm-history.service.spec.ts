import { TestBed, inject } from '@angular/core/testing';

import { AlarmHistoryService } from './alarm-history.service';

describe('AlarmHistoryService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AlarmHistoryService]
    });
  });

  it('should be created', inject([AlarmHistoryService], (service: AlarmHistoryService) => {
    expect(service).toBeTruthy();
  }));
});
