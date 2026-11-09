import { Routes } from '@angular/router';

import { DetailsComponent } from './details/details.component';
import { LayoutComponent } from './layout/layout.component';
import { UpdateComponent } from './update/update.component';

export const PROFILE_ROUTES: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: '', component: DetailsComponent },
      { path: 'update', component: UpdateComponent },
    ],
  },
];
