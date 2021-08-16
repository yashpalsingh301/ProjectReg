import { Route } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Farmer } from '../farmer';
import { FarmerServiceService } from '../farmer-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  farmer:Farmer=new Farmer();
  msg:String="";
  

  
  patternCheck:String="^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$";

  constructor(private farmerService:FarmerServiceService,
    private router:Router) { }

  ngOnInit(): void {
  }


  loginFarmers(){
    this.farmerService.loginFarmer(this.farmer).subscribe(
      data=>{
        sessionStorage.setItem('mail',String(this.farmer.email));
        console.log(this.farmer.email);
        console.log("fine");
        this.router.navigate(['/afterLogin']);
        
    },
      error=>{console.log("exception occur");
      this.msg="Please enter correct emailId or password";

    }
    )
    
  }

  regClick(){
    this.router.navigate(['/addFarmer']);

  }
}
