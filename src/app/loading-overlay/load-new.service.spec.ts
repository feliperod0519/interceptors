import { TestBed } from '@angular/core/testing';

import { LoadNewService } from './load-new.service';

describe('LoadNewService', () => {
  let service: LoadNewService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoadNewService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
