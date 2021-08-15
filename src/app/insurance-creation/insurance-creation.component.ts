import { Component, OnInit } from '@angular/core';
import { Insurance } from '../insurance';
import { InsuranceService } from '../insurance.service';

@Component({
  selector: 'app-insurance-creation',
  templateUrl: './insurance-creation.component.html',
  styleUrls: ['./insurance-creation.component.css']
})
export class InsuranceCreationComponent implements OnInit {

  insurance:any;
  insurances:any;
  constructor(private insuranceService:InsuranceService) { 
    this.insurance=new Insurance();
    this.insurances=new Insurance();
  }

  ngOnInit(): void {
    this.insuranceService. getAllInsurance().subscribe((data)=>
    {
      console.log(data);
      this.insurances=data;
      console.log(this.insurances);
    });
    
  }

  saveData()
  {
    this.insuranceService.addNewProduct(this.insurance).subscribe(
      (data)=>{
        console.log("Return Value from REST"+data); 
        alert("Insurance Created")
      }
    );
  }
  updateData()
  {
    this.insuranceService.updateInsurance(this.insurance).subscribe(
      (data)=>{
        console.log("Data Updated");
        alert("Data Updated")
      }
    )
  }
}