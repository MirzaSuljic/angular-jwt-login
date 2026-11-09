import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';

import { AddEditComponent } from './add-edit.component';

describe('AddEditComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddEditComponent],
      providers: [provideRouter([]), provideHttpClient(), provideHttpClientTesting()],
    }).compileComponents();
  });

  it('should create', () => {
    const fixture = TestBed.createComponent(AddEditComponent);
    expect(fixture.componentInstance).toBeTruthy();
  });
});
