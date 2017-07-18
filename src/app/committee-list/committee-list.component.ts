import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ProPublicaService } from './../pro-publica.service';
import { Committee } from './../committee.model';

@Component({
  selector: 'app-committee-list',
  templateUrl: './committee-list.component.html',
  styleUrls: ['./committee-list.component.css'],
  providers: [ProPublicaService]
})
export class CommitteeListComponent implements OnInit {
  senateCommitteeList: any[] = null;
  houseCommitteeList: any[] = null;

  constructor(
    private proPublicaService: ProPublicaService,
    private router: Router) { }

  ngOnInit() {
    this.getSenate();
    this.getHouse();
  }

  getSenate() {
    this.proPublicaService.getSenateCommittees().subscribe(response => {
      let output: Committee[] = [];
      response.json().results[0].committees.forEach(committee => {
        let newCommittee = new Committee(committee.id, committee.name, committee.chair);
        committee.subcommittees.forEach((subcomm) => {
          newCommittee.subcommittees.push(subcomm.name);
        });
        output.push(newCommittee);
      });
      this.senateCommitteeList = output;
    });
  }

  getHouse() {
    this.proPublicaService.getHouseCommittees().subscribe(response => {
      let output: Committee[] = [];
      response.json().results[0].committees.forEach(committee => {
        let newCommittee = new Committee(committee.id, committee.name, committee.chair);
        committee.subcommittees.forEach((subcomm) => {
          newCommittee.subcommittees.push(subcomm.name);
        });
        output.push(newCommittee);
      });
      this.houseCommitteeList = output;
    });
  }

  goToCommitteeDetail(clickedCommittee: Committee) {
    this.router.navigate(['committees', clickedCommittee.id]);
  }
}
