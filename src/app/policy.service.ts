import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Policy } from './policy';

@Injectable({
  providedIn: 'root'
})
export class PolicyService {
  baseUrl:string='http://localhost:9887/policyRest/api';
  constructor(private httpClient:HttpClient) { }
  getAllPolicy()
  {
     return this.httpClient.get(this.baseUrl+'/policies');
  }
  getPolicyByEmailId(email:String)
  {
    return this.httpClient.get(this.baseUrl+'/PolicyByEmail/'+email);
  }
  addNewPolicy(policy:Policy)
  {
    console.log("In adding Policy");
    
    console.log(policy);
    
    return this.httpClient.post(this.baseUrl+'/policies',policy);
  }
  addNewPolicyFromWeb(policy:Policy)
  {
    console.log("Adding Policy from web");
    
    console.log(policy);
    
    return this.httpClient.post(this.baseUrl+'/policyFromWeb',policy);
  }
  getPolicyNumber()
  {
    return this.httpClient.get(this.baseUrl+'/generatePolicyId');
  }
}
