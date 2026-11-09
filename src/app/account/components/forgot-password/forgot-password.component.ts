import { ChangeDetectionStrategy, Component, OnInit, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { finalize, first } from 'rxjs/operators';

import { AccountService } from '../../../_services/account.service';
import { AlertService } from '../../../_services/alert.service';

@Component({
  selector: 'app-forgot-password',
  imports: [ReactiveFormsModule, RouterLink],
  templateUrl: './forgot-password.component.html',
  styleUrl: './forgot-password.component.css',
  changeDetection: ChangeDetectionStrategy.Eager,
})
export class ForgotPasswordComponent implements OnInit {
  private formBuilder = inject(FormBuilder);
  private accountService = inject(AccountService);
  private alertService = inject(AlertService);

  form: FormGroup;
  loading = false;
  submitted = false;

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
    });
  }

  // convenience getter for easy access to form fields
  get f() {
    return this.form.controls;
  }

  onSubmit() {
    this.submitted = true;

    // reset alerts on submit
    this.alertService.clear();

    // stop here if form is invalid
    if (this.form.invalid) {
      return;
    }

    this.loading = true;
    this.accountService
      .forgotPassword(this.f.email.value)
      .pipe(
        first(),
        finalize(() => (this.loading = false))
      )
      .subscribe({
        next: () =>
          this.alertService.success('Please check your email for password reset instructions'),
        error: (error) => this.alertService.error(error),
      });
  }
}
