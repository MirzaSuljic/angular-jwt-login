import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { AccountService } from '../_services/account.service';

export const errorInterceptor: HttpInterceptorFn = (request, next) => {
  const accountService = inject(AccountService);

  return next(request).pipe(
    catchError((err) => {
      if ([401, 403].includes(err.status) && accountService.accountValue) {
        // auto logout if 401 or 403 response returned from api
        accountService.logout();
      }

      const error = err?.error?.message || err.statusText;
      console.error(err);
      return throwError(() => error);
    })
  );
};
