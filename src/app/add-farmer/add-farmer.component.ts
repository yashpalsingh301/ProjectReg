import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Farmer } from '../farmer';
import { FarmerServiceService } from '../farmer-service.service';
import { Land } from '../land';

@Component({
  selector: 'app-add-farmer',
  templateUrl: './add-farmer.component.html',
  styleUrls: ['./add-farmer.component.css']
})
export class AddFarmerComponent implements OnInit {

  farmer:Farmer=new Farmer();
  land :Land=new Land();
  
  patternCheck:String="^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$";
  mobPattCheck:String="(0/91)?[7-9][0-9]{9}";
  adhrPattCheck:String="^[0-9]+$";
  

  constructor(private farmerService:FarmerServiceService,
    private route:Router) { 
    
  }

  ngOnInit(): void {
  }

  saveData(){
    
    this.farmerService.addFarmer(this.farmer).subscribe((data)=>{
      console.log(data);
    
      this.route.navigate(['/farmerLogin'])
    })

    

  }

  add(regForm:NgForm){
    // console.log(JSON.stringify(regForm.value));
   
  }

}
