import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, observable } from 'rxjs';

import { Farmer } from './farmer';
import { Land } from './land';

@Injectable({
  providedIn: 'root'
})
export class FarmerServiceService {
  

  constructor(private httpClient:HttpClient) {}
   private baseUrl="http://localhost:9697/farmer/api/getfarmers";
   private baseUrl1="http://localhost:9697/farmer/api/getlands";
  
  addFarmer(farmer:Farmer):Observable<object>
  {
    return this.httpClient.post(`${this.baseUrl}`,farmer);
  }

  addLand(land:Land):Observable<object>
  {
    return this.httpClient.post(`${this.baseUrl1}`,land);
  }

}