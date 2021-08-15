import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Admin } from '../admin';
import { FarmerServiceService } from '../farmer-service.service';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {
  admin:Admin=new Admin();
  msg:String=""

  constructor(private route:Router,
    private service:FarmerServiceService) { }

  ngOnInit(): void {
  }

  adminlogin(){
    this.service.loginAdmin(this.admin).subscribe(
      data=>{
        console.log("response recieved successfully");
        this.route.navigate(['/afterAdminLogin'])
        // this.route.navigate(['/addFarmer']);
        
    },
      error=>{console.log("exception occur");
      this.msg="Please enter correct emailId or password";

    }
    )
  }

  

}
