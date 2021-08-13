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
    ContactUsComponent
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
