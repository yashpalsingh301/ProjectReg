import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, observable } from 'rxjs';
import { Admin } from './admin';
import { Bidder } from './bidder';

import { Farmer } from './farmer';
import { Land } from './land';

@Injectable({
  providedIn: 'root'
})
export class FarmerServiceService {
  

  constructor(private httpClient:HttpClient) {}
   private baseUrl1="http://localhost:9697/farmer/api/getfarmers";
   private baseUrl2="http://localhost:9697/farmer/api/login";
   private baseUrl3="http://localhost:9797/admin/api/loginadmin";
  

  
   
  
  addFarmer(farmer:Farmer):Observable<object>
  {
    return this.httpClient.post(`${this.baseUrl1}`,farmer);
  }

  public loginFarmer(farmer:Farmer):Observable<any>
  {
     return this.httpClient.post<any>(`${this.baseUrl2}`,farmer);
  }

  public loginAdmin(admin:Admin):Observable<any>
  {
     return this.httpClient.post<any>(`${this.baseUrl3}`,admin);
  }

  
 

  

}