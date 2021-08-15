import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-afterlogin',
  templateUrl: './afterlogin.component.html',
  styleUrls: ['./afterlogin.component.css']
})
export class AfterloginComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }


  AddProduct(){
    this.router.navigate(['/addProduct']);
  }

  Insurance(){
    this.router.navigate(['/policy'])
  }

  FarmerClaim(){
    this.router.navigate(['/claim'])
  }
}
