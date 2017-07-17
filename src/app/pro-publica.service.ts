import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import { proPublicaKey } from './api-keys';

@Injectable()
export class ProPublicaService {

  constructor(private http: Http) { }

  // getSenate() {
  //   this.http.get('https://api.propublica.org/congress/v1/115/senate/members.json',
  //     { headers: "X-API-Key: proPublicaKey" });
  // }

  // createAuthorizationHeader(headers: Headers) {
  //   headers.append('Authorization', 'Basic ' +
  //     btoa('username:password'));
  // }
  //
  getSenate(url) {
    let headers = new Headers();
    headers.append('X-API-Key','proPublicaKey');
    // this.createAuthorizationHeader(headers);
    return this.http.get(url, {
      headers: headers
    }).subscribe(response => {
      console.log(response.json());
    });
  }

}
