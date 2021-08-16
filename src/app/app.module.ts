import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddFarmerComponent } from './add-farmer/add-farmer.component';
import {HttpClientModule} from '@angular/common/http'
import { FormsModule, NgForm } from '@angular/forms';
import { ForgotComponent } from './forgot/forgot.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { AfterloginComponent } from './afterlogin/afterlogin.component';
import { AfterregComponent } from './afterreg/afterreg.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { LoginbidderComponent } from './loginbidder/loginbidder.component';
import { BidderregComponent } from './bidderreg/bidderreg.component';
import { ProductComponent } from './product/product.component';
import { AdminClaimComponent } from './admin-claim/admin-claim.component';
import {InsurancePolicyComponent} from './insurance-policy/insurance-policy.component';
import {FarmerClaimComponent} from './farmer-claim/farmer-claim.component';
import { AfterAdminLoginComponent } from './after-admin-login/after-admin-login.component';
import { InsuranceCreationComponent } from './insurance-creation/insurance-creation.component';
import { BiddingTableComponent } from './bidding-table/bidding-table.component';
import { AuctionComponent } from './auction/auction.component';
import { ErrorComponent } from './error/error.component';



@NgModule({
  declarations: [
    AppComponent,
    AddFarmerComponent,
    ForgotComponent,
    LoginComponent,
    HomeComponent,
    AfterloginComponent,
    AfterregComponent,
    NavbarComponent,
    AboutUsComponent,
    ContactUsComponent,
    AdminLoginComponent,
    LoginbidderComponent,
    BidderregComponent,
    ProductComponent,
    AdminClaimComponent,
    InsurancePolicyComponent,
    FarmerClaimComponent,
    AfterAdminLoginComponent,
    InsuranceCreationComponent,
    BiddingTableComponent,
    AuctionComponent,
    ErrorComponent
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
