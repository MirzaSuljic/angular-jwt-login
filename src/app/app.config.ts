import { provideHttpClient, withInterceptors } from '@angular/common/http';
import {
  ApplicationConfig,
  provideAppInitializer,
  provideBrowserGlobalErrorListeners,
  provideZoneChangeDetection,
} from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { appInitializer } from './_helpers/app.initializer';
import { errorInterceptor } from './_helpers/error.interceptor';
// used to create fake backend
import { fakeBackendInterceptor } from './_helpers/fake-backend';
import { jwtInterceptor } from './_helpers/jwt.interceptor';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideHttpClient(
      withInterceptors([
        jwtInterceptor,
        errorInterceptor,
        // fake backend in place of a real API for backend-less development
        fakeBackendInterceptor,
      ])
    ),
    // attempt to refresh token on app start up to auto authenticate
    provideAppInitializer(appInitializer),
  ],
};
