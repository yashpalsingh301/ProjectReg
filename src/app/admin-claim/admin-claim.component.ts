import { Component, OnInit } from '@angular/core';
import { Claim } from '../claim';
import { ClaimService } from '../claim.service';




@Component({
  selector: 'app-admin-claim',
  templateUrl: './admin-claim.component.html',
  styleUrls: ['./admin-claim.component.css']
})
export class AdminClaimComponent implements OnInit {

  claim:any;claimUpdate:any
  constructor(private claimService:ClaimService) {
    this.claim=new Claim();
    this.claimUpdate=new Claim();
  }

  ngOnInit(): void {
    this.claimService.getClaimByStatus().subscribe((data)=>{
      this.claim=data;
    })
  }

  Approve(claimApprove:Claim)
  {
      claimApprove.status="Approved";
      this.claimService.updateClaim(claimApprove).subscribe((data)=>
      {
          alert("Claim Approved")
      })
  }
  Reject(claimApprove:Claim)
  {
      claimApprove.status="Rejected";
      this.claimService.updateClaim(claimApprove).subscribe((data)=>
      {
          alert("Claim Rejected")
      })
  }
  

}
