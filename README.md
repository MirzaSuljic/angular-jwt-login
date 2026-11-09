# AngularJwtLogin

Angular 22 app: email sign-up with verification, JWT authentication with refresh tokens,
forgot/reset password, role-based access (User / Admin) and an admin account manager.
A fake backend (`src/app/_helpers/fake-backend.ts`) stores accounts in `localStorage`,
so the app runs without a real API.

Requires Node.js `^22.22.3`, `^24.15.0` or `^26`.

## Development server

```bash
npm install
npm start        # ng serve -> http://localhost:4200/
```

## Build

```bash
npm run build    # production build in dist/angular-jwt-login
```

## Running unit tests

```bash
npm test         # ng test (Vitest + jsdom)
```

## Project structure (Angular 22 style)

- Standalone components, `bootstrapApplication` in `src/main.ts`, providers in `src/app/app.config.ts`
- Lazy-loaded route files: `account/account.routes.ts`, `profile/profile.routes.ts`,
  `admin/admin.routes.ts`, `admin/accounts/accounts.routes.ts`
- Functional guard (`authGuard`) and interceptors (`jwtInterceptor`, `errorInterceptor`, `fakeBackendInterceptor`)
- Built-in control flow (`@if`, `@for`) in templates
- Zone.js change detection with `ChangeDetectionStrategy.Eager` on the existing components
