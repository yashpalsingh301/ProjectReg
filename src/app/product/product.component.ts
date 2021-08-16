import { Component, OnInit } from '@angular/core';
import { Product } from '../product';


import { ProductService } from '../product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  addproduct:Product;
  constructor(private productservice:ProductService) { 
    this.addproduct= new Product();
  }

  ngOnInit(): void {
  }
  saveData(){
    this.productservice.addNewProduct(this.addproduct).subscribe(
      (data)=>{
        console.log("Return Value from REST" + data);
        alert("Your product has been added successfully")
      }
    )
}
}
