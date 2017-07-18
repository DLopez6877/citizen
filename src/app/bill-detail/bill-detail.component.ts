import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import * as firebase from "firebase";

import { ProPublicaService } from './../pro-publica.service';

@Component({
  selector: 'app-bill-detail',
  templateUrl: './bill-detail.component.html',
  styleUrls: ['./bill-detail.component.css'],
  providers: [ProPublicaService]
})
export class BillDetailComponent implements OnInit {
  billId: string;
  billToDisplay;
  private user;
  isStarred: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private proPublicaService: ProPublicaService,
    private router: Router
  ) { }

  ngOnInit() {
    this.route.params.forEach((urlParameters) => {
      this.billId = urlParameters['id'];
    });

    this.proPublicaService.getBillById(this.billId).subscribe(response => {
      this.billToDisplay = response.json().results[0];
      console.log(response.json().results[0]);
    });
  }

  ngDoCheck() {
    this.user = firebase.auth().currentUser;
    console.log(this.user);
  }

  starBill() {
    this.isStarred = !this.isStarred;
  }

}
