import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import {
  ActivatedRouteSnapshot,
  provideRouter,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';

import { authGuard } from './auth.guard';

describe('authGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [provideRouter([]), provideHttpClient(), provideHttpClientTesting()],
    });
  });

  it('should redirect to login with returnUrl when not logged in', () => {
    const route = { data: {} } as ActivatedRouteSnapshot;
    const state = { url: '/profile' } as RouterStateSnapshot;

    const result = TestBed.runInInjectionContext(() => authGuard(route, state));

    expect(result instanceof UrlTree).toBe(true);
    const url = TestBed.inject(Router).serializeUrl(result as UrlTree);
    expect(url.startsWith('/account/login')).toBe(true);
    expect(url).toContain('returnUrl=');
  });
});
