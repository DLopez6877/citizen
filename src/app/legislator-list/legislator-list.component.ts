import { Component, OnInit } from '@angular/core';
import * as congressionalDistricts from 'congressional-districts';
import { Router } from '@angular/router';
import * as zipCodes from 'zipcodes';

import { ProPublicaService } from './../pro-publica.service';

@Component({
  selector: 'app-legislator-list',
  templateUrl: './legislator-list.component.html',
  styleUrls: ['./legislator-list.component.css'],
  providers: [ProPublicaService]

})
export class LegislatorListComponent implements OnInit {
  senators: any[] = [];
  congressPeople: any[] = [];

  constructor(
    private proPublicaService: ProPublicaService,
    private router: Router) { }

  ngOnInit() {
    this.searchLegislators("99501");
  }

  searchLegislators(zip: string) {
    this.congressPeople = [];
    this.senators = [];
    // let intValue: number = parseInt(value);
    if (zip.length === 5) {
      let zipArr: string[] = congressionalDistricts.getDistricts(zip).length === 0 ? [1] : congressionalDistricts.getDistricts(zip);
      console.log(zipArr);
      let stateObj = zipCodes.lookup(zip);
      zipArr.forEach(district => {
        this.proPublicaService.getHouseByDistrict(stateObj.state, district).subscribe(response => {
          this.congressPeople.push(response.json().results[0]);
          console.log(response.json().results[0]);
        });
      });
      this.proPublicaService.getSenateByDistrict(stateObj.state).subscribe(response => {
        this.senators = response.json().results;
        console.log(response.json().results);
      })
    }
  }

  goToLegislatorDetail(clickedLegislator) {
    this.router.navigate(['legislators', clickedLegislator.id]);
  }
}
