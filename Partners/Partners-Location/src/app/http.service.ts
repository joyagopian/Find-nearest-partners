import { Injectable } from '@angular/core';
import {HttpClient,HttpParams} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http : HttpClient) { }

  getPartners(distance : number){
      const params = new HttpParams()
    .set('longitude', '51.5144636')
    .set('latitude', '-0.142571')
    .set('distance', distance);

    console.log(params);

    return this.http.get('http://localhost:3000/api/partners',{params});
  }
}
