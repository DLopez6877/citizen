import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LegislatorListComponent } from './legislator-list/legislator-list.component';
import { BillListComponent } from './bill-list/bill-list.component';
import { CommitteeListComponent } from './committee-list/committee-list.component';

const appRoutes: Routes = [
  {
    path: '',
    component: BillListComponent
  },
  {
    path: 'legislators',
    component: LegislatorListComponent
  },
  {
    path: 'committees',
    component: CommitteeListComponent
  },
  {
    path: 'recent-bills',
    component: BillListComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
