import { Component, OnInit } from '@angular/core';
import { Claim } from '../claim';
import { ClaimService } from '../claim.service';
import { Policy } from '../policy';
import { PolicyService } from '../policy.service';


@Component({
  selector: 'app-farmer-claim',
  templateUrl: './farmer-claim.component.html',
  styleUrls: ['./farmer-claim.component.css']
})
export class FarmerClaimComponent implements OnInit {

  claim:any;
  claimFetch:any;
  policy:any;
  id:number=0;
  mail:any;
  constructor(private claimService:ClaimService,private policyService:PolicyService) {
      this.claim=new Claim();
      this.policy=new Policy();
   }

  ngOnInit(): void {

  }
  search()
  {
    //this.mail=this.claim.emailId
    this.policyService.getPolicyByEmailId(this.mail).subscribe((data)=>
    {
      this.policy=data;
    });
    this.claimService.getClaimFromMail(this.mail).subscribe((data)=>
    {
      this.claimFetch=data;
    })
  }
  saveData()
  {
    this.claimService.addClaimIdFromWeb(this.claim).subscribe((data)=>
    {
      console.log(this.claim);
      alert("Insurance Created")
      console.log("Return Value from REST"+data); 
    })
  }
}
