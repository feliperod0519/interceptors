import { TestBed } from '@angular/core/testing';

import { HostNewInterceptor } from './host-new.interceptor';

describe('HostNewInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      HostNewInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: HostNewInterceptor = TestBed.inject(HostNewInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
