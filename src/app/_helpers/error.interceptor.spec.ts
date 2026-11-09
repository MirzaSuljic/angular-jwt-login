import { HttpClient, provideHttpClient, withInterceptors } from '@angular/common/http';
import { HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';

import { errorInterceptor } from './error.interceptor';

describe('errorInterceptor', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        provideRouter([]),
        provideHttpClient(withInterceptors([errorInterceptor])),
        provideHttpClientTesting(),
      ],
    });
  });

  it('should map an error response to its message', () => {
    const http = TestBed.inject(HttpClient);
    const httpTesting = TestBed.inject(HttpTestingController);
    let received: unknown;

    http.get('/test').subscribe({ error: (e) => (received = e) });
    httpTesting
      .expectOne('/test')
      .flush({ message: 'Something went wrong' }, { status: 400, statusText: 'Bad Request' });

    expect(received).toBe('Something went wrong');
    httpTesting.verify();
  });
});
