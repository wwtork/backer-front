import { TestBed, inject } from '@angular/core/testing';

import { GlobalDataService } from './global-data.service';

describe('GlobalDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GlobalDataService]
    });
  });

  it('should ...', inject([GlobalDataService], (service: GlobalDataService) => {
    expect(service).toBeTruthy();
  }));
});
