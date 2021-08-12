import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { config, Observable, observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ForgotService {

  constructor(private httpClient:HttpClient) { }
  private baseUrl="http://localhost:9698/forgot";
  
  forgetPassword(data){
     return this.httpClient.post<any>(`https://identitytoolkit.googleapis.com/v1/accounts:sendOobCode?key=${this.baseUrl}`,{
      requestType:'PASSWORD_RESET',
      email:data.email
    })
    
  }
}
