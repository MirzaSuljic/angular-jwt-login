import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';

import { AccountService } from '../../../_services/account.service';

@Component({
  selector: 'app-account-layout',
  imports: [RouterOutlet],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css',
  changeDetection: ChangeDetectionStrategy.Eager,
})
export class LayoutComponent {
  private router = inject(Router);
  private accountService = inject(AccountService);

  constructor() {
    // redirect to home if already logged in
    if (this.accountService.accountValue) {
      this.router.navigate(['/']);
    }
  }
}
