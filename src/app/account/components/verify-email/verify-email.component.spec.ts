import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';

import { VerifyEmailComponent } from './verify-email.component';

describe('VerifyEmailComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VerifyEmailComponent],
      providers: [provideRouter([]), provideHttpClient(), provideHttpClientTesting()],
    }).compileComponents();
  });

  it('should create', () => {
    const fixture = TestBed.createComponent(VerifyEmailComponent);
    expect(fixture.componentInstance).toBeTruthy();
  });
});
