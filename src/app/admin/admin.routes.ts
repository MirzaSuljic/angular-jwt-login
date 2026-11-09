import { Routes } from '@angular/router';

import { LayoutComponent } from './components/layout/layout.component';
import { OverviewComponent } from './components/overview/overview.component';
import { SubNavComponent } from './components/subnav/subnav.component';

export const ADMIN_ROUTES: Routes = [
  { path: '', component: SubNavComponent, outlet: 'subnav' },
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: '', component: OverviewComponent },
      {
        path: 'accounts',
        loadChildren: () => import('./accounts/accounts.routes').then((m) => m.ACCOUNTS_ROUTES),
      },
    ],
  },
];
