import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';




@Injectable({
  providedIn: 'root'
})
export class AdunitService {
  

  uri = 'http://localhost:4000/adunits';
  constructor(
    private http: HttpClient
  ) { }

  



  addAdUnit(unit_name, unit_price) {
    const obj = {
      unit_name: unit_name,
      unit_price: unit_price
    };
    let httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
    console.log("depuis le service angular",obj);
    return this.http.post('http://localhost:4000/adunits/add', obj, httpOptions);
  }
}
