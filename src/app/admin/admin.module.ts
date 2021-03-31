import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { LayoutComponent } from './components/layout/layout.component';
import { OverviewComponent } from './components/overview/overview.component';
import { SubNavComponent } from './components/subnav/subnav.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [AdminComponent, LayoutComponent, OverviewComponent, SubNavComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
