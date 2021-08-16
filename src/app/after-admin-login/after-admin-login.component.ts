import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-after-admin-login',
  templateUrl: './after-admin-login.component.html',
  styleUrls: ['./after-admin-login.component.css']
})
export class AfterAdminLoginComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

adminClaim(){
  this.router.navigate(['/adminClaim'])
}

adminCreation(){
  this.router.navigate(['/InsuranceCreation'])
}

auction(){
  this.router.navigate(['/auction'])
}

}
