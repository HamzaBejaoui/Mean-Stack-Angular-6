import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AdUnit } from './components/index/AdUnit';

// let httpOptions = {
//   headers: new HttpHeaders({ 'Content-Type': 'application/json' })
// };

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
    
    console.log("depuis le service angular",obj);
    return this.http.post('http://localhost:4000/adunits/add', obj );
  }

  getAdUnits(){
    return this.http.get('http://localhost:4000/adunits');
  }

  editAdUnit(id) {
    return this.http.get(`${this.uri}/edit/${id}`);
  }

  updateAdUnit(unit_name, unit_price, id) {
    const obj = {
      unit_name: unit_name,
      unit_price: unit_price
    };
    this.http.post(`${this.uri}/update/${id}`, obj).subscribe(res => console.log('Done'));
  }


  deleteAdUnit(id){
    return this.http.get(`${this.uri}/delete/${id}`);
  }
}
