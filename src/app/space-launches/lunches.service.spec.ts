import { TestBed } from '@angular/core/testing';

import { LunchesService } from './lunches.service';

describe('LunchesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LunchesService = TestBed.get(LunchesService);
    expect(service).toBeTruthy();
  });
});
