import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ForgotService } from '../forgot.service';

@Component({
  selector: 'app-forgot',
  templateUrl: './forgot.component.html',
  styleUrls: ['./forgot.component.css']
})
export class ForgotComponent implements OnInit {
  email:String;

  constructor(private _authService:ForgotService) { }

  ngOnInit(): void {
  }

  otpEmail(email:String){
    this._authService.forgetPassword(this.email).subscribe((data)=>{
      console.log(data);
    },
    (err)=>{
      console.log(err);
    })
  }


  get(passforForm:NgForm){
    console.log(passforForm.value);
  }
}
