import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { ProPublicaService } from './../pro-publica.service';

@Component({
  selector: 'app-committee-detail',
  templateUrl: './committee-detail.component.html',
  styleUrls: ['./committee-detail.component.css'],
  providers: [ProPublicaService]
})

export class CommitteeDetailComponent implements OnInit {
  committeeId: string;

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private proPublicaService: ProPublicaService
  ) { }

  ngOnInit() {
    this.route.params.forEach((urlParameters) => {
      this.committeeId = urlParameters['id'];
    })
  }

}
