import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';

import { AccountService } from '../../_services/account.service';

@Component({
  selector: 'app-details',
  imports: [RouterLink],
  templateUrl: './details.component.html',
  styleUrl: './details.component.css',
  changeDetection: ChangeDetectionStrategy.Eager,
})
export class DetailsComponent {
  private accountService = inject(AccountService);

  account = this.accountService.accountValue;
}
