import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from './product';
@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private httpClient:HttpClient) { }

  baseUrl:string="http://localhost:9887/productRest/api";

  addNewProduct(addproduct:Product)
  {
    return this.httpClient.post(this.baseUrl+"/products",addproduct);
  }
  getProduct()
  {
    return this.httpClient.get(this.baseUrl+"/products");
  }
  addBidding(addBid){
    return this.httpClient.post(this.baseUrl+"/bidder",addBid)
  }
}