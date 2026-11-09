import { ChangeDetectionStrategy, Component, inject } from '@angular/core';

import { AccountService } from '../../_services/account.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  changeDetection: ChangeDetectionStrategy.Eager,
})
export class HomeComponent {
  private accountService = inject(AccountService);

  account = this.accountService.accountValue;
}
