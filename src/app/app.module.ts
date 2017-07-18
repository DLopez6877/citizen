import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { BillListComponent } from './bill-list/bill-list.component';
import { BillDetailComponent } from './bill-detail/bill-detail.component';
import { LegislatorListComponent } from './legislator-list/legislator-list.component';
import { CommitteeListComponent } from './committee-list/committee-list.component';
import { CommitteeDetailComponent } from './committee-detail/committee-detail.component';

import { routing } from './app.routing';
import { LegislatorDetailComponent } from './legislator-detail/legislator-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    BillListComponent,
    BillDetailComponent,
    LegislatorListComponent,
    CommitteeListComponent,
    CommitteeDetailComponent,
    LegislatorDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
