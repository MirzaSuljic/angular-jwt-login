import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';

import { SubNavComponent } from './subnav.component';

describe('SubNavComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SubNavComponent],
      providers: [provideRouter([]), provideHttpClient(), provideHttpClientTesting()],
    }).compileComponents();
  });

  it('should create', () => {
    const fixture = TestBed.createComponent(SubNavComponent);
    expect(fixture.componentInstance).toBeTruthy();
  });
});
