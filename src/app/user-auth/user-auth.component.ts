import { Component, OnInit } from '@angular/core';

import { AuthenticationService } from './../authentication.service';

@Component({
  selector: 'app-user-auth',
  templateUrl: './user-auth.component.html',
  styleUrls: ['./user-auth.component.css'],
  providers: [AuthenticationService]
})
export class UserAuthComponent implements OnInit {
  user;
  private isLoggedIn: Boolean;
  private userName: String;

  constructor( private authService: AuthenticationService) {
    this.authService.user.subscribe(user => {
      if (user == null) {
        this.isLoggedIn = false;
      } else {
        this.isLoggedIn = true;
        this.userName = user.displayName;
      }
    });
  }

  ngOnInit() {
  }

}
