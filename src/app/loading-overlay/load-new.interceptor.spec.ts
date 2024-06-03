import { TestBed } from '@angular/core/testing';

import { LoadNewInterceptor } from './load-new.interceptor';

describe('LoadNewInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      LoadNewInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: LoadNewInterceptor = TestBed.inject(LoadNewInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
