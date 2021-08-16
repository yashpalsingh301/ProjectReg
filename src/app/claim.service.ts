import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Claim } from './claim';

@Injectable({
  providedIn: 'root'
})
export class ClaimService {

  baseUrl:string='http://localhost:9797/claimRest/api';
  constructor(private httpClient:HttpClient) { }
  getAllClaims()
  {
     return this.httpClient.get(this.baseUrl+'/claims');
  }
  getClaimFromMail(mail:String)
  {
    return this.httpClient.get(this.baseUrl+'/ClaimByEmail/'+mail);
  }
  getClaimByStatus()
  {
    return this.httpClient.get(this.baseUrl+'/ClaimByStatus/');
  }
  addNewCliam(claim:Claim)
  {
    return this.httpClient.post(this.baseUrl+'/claims',claim);
  }
  addClaimIdFromWeb(claim:Claim)
  {
    return this.httpClient.post(this.baseUrl+'/claimFromWeb',claim);
  }
  updateClaim(claim:Claim)
  {
    return this.httpClient.put(this.baseUrl+'/claims',claim);
  }
}
