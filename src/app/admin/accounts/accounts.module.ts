import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccountsRoutingModule } from './accounts-routing.module';
import { AccountsComponent } from './accounts.component';
import { AddEditComponent } from './components/add-edit/add-edit.component';
import { ListComponent } from './components/list/list.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [AccountsComponent, AddEditComponent, ListComponent],
  imports: [
    CommonModule,
    AccountsRoutingModule,
    ReactiveFormsModule,
  ]
})
export class AccountsModule { }
