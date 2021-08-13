import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Farmer } from '../farmer';
import { ForgotService } from '../forgot.service';

@Component({
  selector: 'app-forgot',
  templateUrl: './forgot.component.html',
  styleUrls: ['./forgot.component.css']
})
export class ForgotComponent implements OnInit {
  farmer:Farmer=new Farmer();

  constructor(private _authService:ForgotService) { }

  ngOnInit(): void {
  }

  otpEmail(){
    this._authService.forgotPassword(this.farmer).subscribe((data)=>{
      console.log(data);
      console.log("chutiya");
    },
    (err)=>{
      console.log("erroe hai");
    })
  }


  get(passforForm:NgForm){
    console.log(passforForm.value);
  }
}
