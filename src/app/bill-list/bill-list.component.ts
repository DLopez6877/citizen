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
  bills: any[];
  billType: string = 'introduced';
  billChamber: string = 'house';

  constructor(
    private proPublicaService: ProPublicaService,
    private router: Router
  ) { }

  ngOnInit() {
    this.getBills();
  }

  getBills() {
    this.proPublicaService.getBillsbyTypeAndChamber(this.billType, this.billChamber).subscribe(response => {
      this.bills = response.json().results[0].bills;
      console.log(response.json().results[0]);
    });
  }

  goToBillDetail(bill) {
    let billId = bill.bill_id.slice(0, -4);
    this.router.navigate(['bills', billId]);
  }

  changeBillType(value: string) {
    console.log(value);
    this.billType = value;
    this.getBills();
  }

  changeBillChamber(value: string) {
    console.log(value);
    this.billChamber = value;
    this.getBills();
  }
}
