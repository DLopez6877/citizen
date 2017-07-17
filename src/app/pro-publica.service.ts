import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import { proPublicaKey } from './api-keys';

@Injectable()
export class ProPublicaService {

  constructor(private http: Http) { }

  getCommitteeById(id: string) {
    let headers = new Headers();
    headers.append('X-API-Key',proPublicaKey);
    return this.http.get(`https://api.propublica.org/congress/v1/115/senate/committees/${id}.json`, {
      headers: headers
    });
  }

  getSenateCommittees() {
    let headers = new Headers();
    headers.append('X-API-Key',proPublicaKey);
    return this.http.get('https://api.propublica.org/congress/v1/115/senate/committees.json', {
      headers: headers
    });
  }

  getHouseCommittees() {
    let headers = new Headers();
    headers.append('X-API-Key',proPublicaKey);
    return this.http.get('https://api.propublica.org/congress/v1/115/house/committees.json', {
      headers: headers
    });
  }

}
