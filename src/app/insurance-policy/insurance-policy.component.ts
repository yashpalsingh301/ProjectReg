import { Component, OnInit } from '@angular/core';
import { Insurance } from '../insurance';
import { InsuranceService } from '../insurance.service';
import { Policy } from '../policy';
import { PolicyService } from '../policy.service';


@Component({
  selector: 'app-insurance-policy',
  templateUrl: './insurance-policy.component.html',
  styleUrls: ['./insurance-policy.component.css']
})
export class InsurancePolicyComponent implements OnInit {

  policy:any;
  insurance:any;
  area:number=1;
  farmerId:number=100;
  sumInsured:any;
  perimumPercentage:any;
  constructor(private policyService:PolicyService,private insuranceService:InsuranceService) {
      
      this.insurance=new Insurance();
      this.policy=new Policy();
   }

  ngOnInit(): void {

  }
  showData()
  {
    this.insuranceService.getInsuranceByCropType(this.insurance.cropType).subscribe((data)=>{
      this.insurance=data;
      console.log(this.insurance);
    }
    );
  }
  Apply(ins:Insurance)
  {
    this.policy.insuranceId=ins.insuranceId;
    // this.policy.farmerId=201;
    this.policy.cropType=ins.cropType;
      this.sumInsured=ins.sumInsured;
      this.perimumPercentage=ins.perimumPercentage;
    this.policy.sumInsured=this.sumInsured*this.area;
    this.policy.perimumAmount=((this.sumInsured*this.perimumPercentage)/100)*this.area;
    console.log("Insurance Applied");
    console.log(this.policy);
    this.policyService.addNewPolicyFromWeb(this.policy).subscribe((data)=>
    {
      console.log("Poilcy create");
       alert("Policy Created");
    }
    );
    
  }

}
