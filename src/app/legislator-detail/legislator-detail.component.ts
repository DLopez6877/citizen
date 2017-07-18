import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { Router } from '@angular/router';

import { ProPublicaService } from './../pro-publica.service';
import { Legislator } from './../legislator.model';


@Component({
  selector: 'app-legislator-detail',
  templateUrl: './legislator-detail.component.html',
  styleUrls: ['./legislator-detail.component.css'],
  providers: [ProPublicaService]
})
export class LegislatorDetailComponent implements OnInit {
  legislatorId: string;
  legislatorToDisplay;

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private proPublicaService: ProPublicaService,
    private router: Router
  ) { }

  ngOnInit() {
    this.route.params.forEach((urlParameters) => {
      this.legislatorId = urlParameters['id'];
    });

    this.proPublicaService.getLegislatorById(this.legislatorId).subscribe(response => {
      this.legislatorToDisplay = response.json().results[0];
      console.log(response.json().results[0]);
    });
  }

  goToCommitteeDetail(clickedCommittee) {
    this.router.navigate(['committees', clickedCommittee.code]);
  }
}
