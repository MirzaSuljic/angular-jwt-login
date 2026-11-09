import { ChangeDetectionStrategy, Component, OnInit, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { first } from 'rxjs/operators';

import { Account } from '../../../../_models/account';
import { AccountService } from '../../../../_services/account.service';

type AccountListItem = Account & { isDeleting?: boolean };

@Component({
  selector: 'app-list',
  imports: [RouterLink],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css',
  changeDetection: ChangeDetectionStrategy.Eager,
})
export class ListComponent implements OnInit {
  private accountService = inject(AccountService);

  accounts: AccountListItem[];

  ngOnInit(): void {
    this.accountService
      .getAll()
      .pipe(first())
      .subscribe((accounts) => (this.accounts = accounts));
  }

  deleteAccount(id: string) {
    const account = this.accounts.find((x) => x.id === id);
    account.isDeleting = true;
    this.accountService
      .delete(id)
      .pipe(first())
      .subscribe(() => {
        this.accounts = this.accounts.filter((x) => x.id !== id);
      });
  }
}
