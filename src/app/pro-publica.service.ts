import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import { proPublicaKey } from './api-keys';

@Injectable()
export class ProPublicaService {

  constructor(private http: Http) { }

  doApiCall(url: string): Observable<any> {
    let headers = new Headers();
    headers.append('X-API-Key',proPublicaKey);
    return this.http.get(`${url}`, {
      headers: headers
    });
  }

  getLegislatorById(id: string): Observable<any> {
    let headers = new Headers();
    headers.append('X-API-Key',proPublicaKey);
    return this.http.get(`https://api.propublica.org/congress/v1/members/${id}.json`, {
      headers: headers
    });
  }

  getHouseByDistrict(state: string, district: string): Observable<any> {
    let headers = new Headers();
    headers.append('X-API-Key',proPublicaKey);
    return this.http.get(`https://api.propublica.org/congress/v1/members/house/${state}/${district}/current.json`, {
      headers: headers
    });
  }

  getSenateByDistrict(state: string): Observable<any> {
    let headers = new Headers();
    headers.append('X-API-Key',proPublicaKey);
    return this.http.get(`https://api.propublica.org/congress/v1/members/senate/${state}/current.json`, {
      headers: headers
    });
  }

  getCommitteeById(id: string): Observable<any> {
    let headers = new Headers();
    headers.append('X-API-Key',proPublicaKey);
    return this.http.get(`https://api.propublica.org/congress/v1/115/senate/committees/${id}.json`, {
      headers: headers
    });
  }

  getSenateCommittees(): Observable<any> {
    let headers = new Headers();
    headers.append('X-API-Key',proPublicaKey);
    return this.http.get('https://api.propublica.org/congress/v1/115/senate/committees.json', {
      headers: headers
    });
  }

  getHouseCommittees(): Observable<any>  {
    let headers = new Headers();
    headers.append('X-API-Key',proPublicaKey);
    return this.http.get('https://api.propublica.org/congress/v1/115/house/committees.json', {
      headers: headers
    });
  }

}
