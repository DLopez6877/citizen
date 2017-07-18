import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { BillListComponent } from './bill-list/bill-list.component';
import { BillDetailComponent } from './bill-detail/bill-detail.component';
import { LegislatorListComponent } from './legislator-list/legislator-list.component';
import { LegislatorDetailComponent } from './legislator-detail/legislator-detail.component';
import { CommitteeListComponent } from './committee-list/committee-list.component';
import { CommitteeDetailComponent } from './committee-detail/committee-detail.component';
import { UserAuthComponent } from './user-auth/user-auth.component';
import { routing } from './app.routing';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { masterFirebaseConfig } from './api-keys';


export const firebaseConfig = {
  apiKey: masterFirebaseConfig.apiKey,
  authDomain: masterFirebaseConfig.authDomain,
  databaseURL: masterFirebaseConfig.databaseURL,
  storageBucket: masterFirebaseConfig.storageBucket,
  messagingSenderId: masterFirebaseConfig.messagingSenderId
};

@NgModule({
  declarations: [
    AppComponent,
    BillListComponent,
    BillDetailComponent,
    LegislatorListComponent,
    CommitteeListComponent,
    CommitteeDetailComponent,
    LegislatorDetailComponent,
    UserAuthComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
