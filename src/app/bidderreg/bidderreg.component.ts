import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Bidder } from '../bidder';
import { BidderService } from '../bidder.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-bidderreg',
  templateUrl: './bidderreg.component.html',
  styleUrls: ['./bidderreg.component.css']
})
export class BidderregComponent implements OnInit {

  bidder:Bidder=new Bidder();
  location_id:Location;

  constructor(private bidderservice:BidderService,
    private router:Router) { 
    
  }

  ngOnInit(): void {
  }
  saveData(){
    this.bidderservice.addNewProduct(this.bidder).subscribe(
      (data)=>{
        console.log("Return Value from REST" + data);
      }
    )

    this.bidderservice.addBidder(this.bidder).subscribe((data)=>{
      console.log(data);
    })
  }

 


}
  


