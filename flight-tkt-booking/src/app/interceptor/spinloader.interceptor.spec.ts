import { TestBed } from '@angular/core/testing';

import { SpinloaderInterceptor } from './spinloader.interceptor';

describe('SpinloaderInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      SpinloaderInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: SpinloaderInterceptor = TestBed.inject(SpinloaderInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
