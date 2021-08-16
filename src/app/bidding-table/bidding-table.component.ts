import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-bidding-table',
  templateUrl: './bidding-table.component.html',
  styleUrls: ['./bidding-table.component.css']
})
export class BiddingTableComponent implements OnInit {

  showBtn:boolean=false
  addProduct: any
  bid:any
  constructor(private productservice: ProductService) {
 
  }

  ngOnInit(): void {


    this.productservice.getProduct().subscribe((data: any) => {
      this.addProduct = data;
      console.log(this.addProduct);
    })
  }
  onchangeData($event: any, product_id) {
    if ($event.target.value) {
      for (let i =0 ;i<this.addProduct.length;i++) {
        if (this.addProduct[i].product_id == product_id) {
          this.addProduct[i].bidder_amount = parseInt($event.target.value);
        }
      }
    }
  }
  saveData($event: any) {
    console.log($event);
    console.log("Entered")
    console.log($event)
    let data = $event
    this.productservice.addBidding(data).subscribe((data: any) => {
      console.log(' Data Updated')
      alert("Table Update")
      console.log(data)
      
    })
  }
  show(){
    this.showBtn=true
  }
  hide(){
    this.showBtn=!this.showBtn
  }
}
