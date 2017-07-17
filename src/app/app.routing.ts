import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LegislatorListComponent } from './legislator-list/legislator-list.component';

const appRoutes: Routes = [
  {
    path: '',
    component: LegislatorListComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
