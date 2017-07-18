import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LegislatorListComponent } from './legislator-list/legislator-list.component';
import { LegislatorDetailComponent } from './legislator-detail/legislator-detail.component';
import { BillListComponent } from './bill-list/bill-list.component';
import { BillDetailComponent } from './bill-detail/bill-detail.component';
import { BillStarsComponent } from './bill-stars/bill-stars.component';
import { CommitteeListComponent } from './committee-list/committee-list.component';
import { CommitteeDetailComponent } from './committee-detail/committee-detail.component';

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
    path: 'legislators/:id',
    component: LegislatorDetailComponent
  },
  {
    path: 'committees',
    component: CommitteeListComponent
  },
  {
    path: 'bills',
    component: BillListComponent
  },
  {
    path: 'bills/starred',
    component: BillStarsComponent
  },
  {
    path: 'bills/:id',
    component: BillDetailComponent
  },
  {
    path: 'committees/:id',
    component: CommitteeDetailComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
