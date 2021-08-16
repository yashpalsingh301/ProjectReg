import { Component, OnInit } from '@angular/core';
import { Bid } from '../bid';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-auction',
  templateUrl: './auction.component.html',
  styleUrls: ['./auction.component.css']
})
export class AuctionComponent implements OnInit {

  bid:any
  market:any;
  constructor(private productservice: ProductService) { }

  ngOnInit(): void {
    this.productservice.getauctiontable().subscribe((data: any) => {
      this.bid = data;
      console.log(this.bid);
    })
  }
  Approve(market:any)
  {
      market.status="Sold"
      // this.productservice.addMarket().subscribe;
      this.productservice.addMarket(market).subscribe((data)=>
      {
          alert("Product Sold")
      })
  }
  Reject(market:any)
  {
    market.status="Rejected";
      this.productservice.addMarket(market).subscribe((data)=>
      {
          alert("Bid Not Approved")
      })
  }
}
