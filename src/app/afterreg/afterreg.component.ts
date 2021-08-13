import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-afterreg',
  templateUrl: './afterreg.component.html',
  styleUrls: ['./afterreg.component.css']
})
export class AfterregComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  onClickFarmer(){
    this.router.navigate(['/addFarmer']);

  }
}
