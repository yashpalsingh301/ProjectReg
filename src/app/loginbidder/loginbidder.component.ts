import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Bidder } from '../bidder';
import { BidderService } from '../bidder.service';


@Component({
  selector: 'app-loginbidder',
  templateUrl: './loginbidder.component.html',
  styleUrls: ['./loginbidder.component.css']
})
export class LoginbidderComponent implements OnInit {
  bidder:Bidder=new Bidder();
  msg:String;

  constructor(private router:Router,
    private service:BidderService) { }

  ngOnInit(): void {
  }

  bidderlogin(){
    this.service.loginBidder(this.bidder).subscribe(
      data=>{
        console.log("response recieved successfully");
        this.router.navigate(['/biddingTable'])
        // this.route.navigate(['/addFarmer']);
        
    },
      error=>{console.log("exception occur");
      this.msg="Please enter correct emailId or password";

    }
    )
  }

  regClick(){
    this.router.navigate(['/bidderReg']);
  }

}
