import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddFarmerComponent } from './add-farmer/add-farmer.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { AfterloginComponent } from './afterlogin/afterlogin.component';
import { AfterregComponent } from './afterreg/afterreg.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'home',component:HomeComponent},
  {path:'farmerLogin',component:LoginComponent},
  {path:'addFarmer',component:AddFarmerComponent},
  {path:'afterLogin',component:AfterloginComponent},
  {path:'afterReg',component:AfterregComponent},
  {path:'about',component:AboutUsComponent},
  {path:'contactUs',component:ContactUsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
