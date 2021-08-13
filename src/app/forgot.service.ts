import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { config, Observable, observable } from 'rxjs';
import { Farmer } from './farmer';


@Injectable({
  providedIn: 'root'
})
export class ForgotService {

  constructor(private httpClient:HttpClient) { }
  private baseUrl1="http://localhost:9697/farmer/api/getfarmers";
  
  forgotPassword(farmer:Farmer){
    return this.httpClient.post(`https://identitytoolkit.googleapis.com/v1/accounts:sendOobCode?key=${this.baseUrl1}`,{
      "requestType":"PASSWORD_RESET",
      "email":farmer.email
    })

  }
}
