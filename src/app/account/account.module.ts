import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccountRoutingModule } from './account-routing.module';
import { AccountComponent } from './account.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { LayoutComponent } from './components/layout/layout.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { ResetPasswordComponent } from './components/reset-password/reset-password.component';
import { VerifyEmailComponent } from './components/verify-email/verify-email.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [AccountComponent, ForgotPasswordComponent, LayoutComponent, LoginComponent, RegisterComponent, ResetPasswordComponent, VerifyEmailComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    AccountRoutingModule
  ]
})
export class AccountModule { }
