import { inject } from '@angular/core';
import { finalize } from 'rxjs/operators';

import { AccountService } from '../_services/account.service';

// attempt to refresh token on app start up to auto authenticate
export function appInitializer(): Promise<void> {
  const accountService = inject(AccountService);

  return new Promise<void>((resolve) => {
    accountService
      .refreshToken()
      .pipe(finalize(() => resolve()))
      .subscribe({ error: () => {} });
  });
}
