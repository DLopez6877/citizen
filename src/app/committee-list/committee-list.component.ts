import { Component, OnInit } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { proPublicaKey } from './../api-keys';

import { ProPublicaService } from './../pro-publica.service';

@Component({
  selector: 'app-committee-list',
  templateUrl: './committee-list.component.html',
  styleUrls: ['./committee-list.component.css'],
  providers: [ProPublicaService]
})
export class CommitteeListComponent implements OnInit {

  constructor(private http: Http) { }

  ngOnInit() {
  }

  getSenate() {
    let headers = new Headers();
    headers.append('X-API-Key',proPublicaKey);
    let options = new RequestOptions({headers: headers});
    return this.http.get('https://api.propublica.org/congress/v1/115/senate/members.json', {
      headers: headers
    }).subscribe(response => {
      console.log(response.json());
    });
  }
}
