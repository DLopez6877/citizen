import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthenticationService } from './../authentication.service';


@Component({
  selector: 'app-bill-stars',
  templateUrl: './bill-stars.component.html',
  styleUrls: ['./bill-stars.component.css'],
  providers: [AuthenticationService]
})
export class BillStarsComponent implements OnInit {
  user;
  private isLoggedIn: Boolean;
  private userName: String;

  constructor(public authService: AuthenticationService, private router: Router) {
    this.authService.user.subscribe(user => {
      if (user == null) {
        this.isLoggedIn = false;
        this.router.navigate(['']);
      } else {
        this.isLoggedIn = true;
        this.userName = user.displayName;
        this.router.navigate(['bills/starred']);
      }
    });
  }

  ngOnInit() {
  }

}
