import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ProPublicaService } from './../pro-publica.service';


@Component({
  selector: 'app-bill-list',
  templateUrl: './bill-list.component.html',
  styleUrls: ['./bill-list.component.css'],
  providers: [ProPublicaService]
})
export class BillListComponent implements OnInit {
  bills;

  constructor(
    private proPublicaService: ProPublicaService,
    private router: Router
  ) { }

  ngOnInit() {
    this.getBills();
  }

  getBills() {

  }
}
