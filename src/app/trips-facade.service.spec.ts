import { TestBed } from '@angular/core/testing';

import { TripsFacadeService } from './trips-facade.service';

describe('TripsFacadeService', () => {
  let service: TripsFacadeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TripsFacadeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
