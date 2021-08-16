import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Insurance } from './insurance';

@Injectable({
  providedIn: 'root'
})
export class InsuranceService {

  baseUrl:string='http://localhost:9797/insuranceRest/api';
  constructor(private httpClient:HttpClient) { }
  getAllInsurance()
  {
     return this.httpClient.get(this.baseUrl+'/insurances');
  }
  addNewProduct(insurance:Insurance)
  {
    return this.httpClient.post(this.baseUrl+'/insurances',insurance);
  }
  getInsuranceByCropType(cropType:string)
  {
    return this.httpClient.get(this.baseUrl+"/insurancebycroptype/"+cropType);
  }
  updateInsurance(insurance:Insurance)
  {
    return this.httpClient.put(this.baseUrl+'/insurances',insurance)
  }
}
