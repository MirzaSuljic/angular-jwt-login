import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

import { Role } from '../_models/role';
import { AccountService } from '../_services/account.service';

export const authGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const account = inject(AccountService).accountValue;

  if (account) {
    // check if route is restricted by role
    const roles = route.data['roles'] as Role[] | undefined;
    if (roles && !roles.includes(account.role)) {
      // role not authorized so redirect to home page
      return router.createUrlTree(['/']);
    }

    // authorized so return true
    return true;
  }

  // not logged in so redirect to login page with the return url
  return router.createUrlTree(['/account/login'], {
    queryParams: { returnUrl: state.url },
  });
};
