import { TestBed } from '@angular/core/testing';

import { AuthNewInterceptor } from './auth-new.interceptor';

describe('AuthNewInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      AuthNewInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: AuthNewInterceptor = TestBed.inject(AuthNewInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
