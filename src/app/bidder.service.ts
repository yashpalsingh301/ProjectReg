  
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Bidder } from './bidder';


@Injectable({
  providedIn: 'root'
})
export class BidderService {

  constructor(private httpClient:HttpClient) { }

  baseUrl:string="http://localhost:9887//productRest/api";
  private baseUrl1="http://localhost:9797/bidder/api/loginbidder";
  private baseurl2="http://localhost:9797/bidder/api/getbidder";


  addNewProduct(bidder:Bidder )
  {
    return this.httpClient.post(this.baseUrl+"/bidders",bidder);
  }

  public loginBidder(bidder:Bidder):Observable<any>
  {
     return this.httpClient.post<any>(`${this.baseUrl1}`,bidder);
  }

  addBidder(bidder:Bidder):Observable<any>
  {
    return this.httpClient.post(this.baseurl2,bidder);
  }
}