import { Component, OnInit } from '@angular/core';
import { Bid } from '../bid';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-auction',
  templateUrl: './auction.component.html',
  styleUrls: ['./auction.component.css']
})
export class AuctionComponent implements OnInit {

  bid:any;
  constructor(private productservice: ProductService) { }

  ngOnInit(): void {
    this.productservice.getauctiontable().subscribe((data: any) => {
      this.bid = data;
      console.log(this.bid);
    })
  }

}
