import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';

import { environment } from '../../environments/environment';
import { AccountService } from '../_services/account.service';

export const jwtInterceptor: HttpInterceptorFn = (request, next) => {
  // add auth header with jwt if account is logged in and request is to the api url
  const account = inject(AccountService).accountValue;
  const isLoggedIn = account?.jwtToken;
  const isApiUrl = request.url.startsWith(environment.apiUrl);

  if (isLoggedIn && isApiUrl) {
    request = request.clone({
      setHeaders: { Authorization: `Bearer ${account.jwtToken}` },
    });
  }

  return next(request);
};
