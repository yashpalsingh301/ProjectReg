import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddFarmerComponent } from './add-farmer/add-farmer.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { AfterloginComponent } from './afterlogin/afterlogin.component';
import { AfterregComponent } from './afterreg/afterreg.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { LoginbidderComponent } from './loginbidder/loginbidder.component';
import { BidderregComponent } from './bidderreg/bidderreg.component';


const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'home',component:HomeComponent},
  {path:'farmerLogin',component:LoginComponent},
  {path:'addFarmer',component:AddFarmerComponent},
  {path:'afterLogin',component:AfterloginComponent},
  {path:'afterReg',component:AfterregComponent},
  {path:'about',component:AboutUsComponent},
  {path:'contactUs',component:ContactUsComponent},
  {path:'adminlogin',component:AdminLoginComponent},
  {path:'bidderlogin',component:LoginbidderComponent},
  {path:'bidderReg',component:BidderregComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
