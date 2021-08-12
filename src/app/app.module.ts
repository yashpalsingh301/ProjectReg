import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddFarmerComponent } from './add-farmer/add-farmer.component';
import {HttpClientModule} from '@angular/common/http'
import { FormsModule, NgForm } from '@angular/forms';
import { ForgotComponent } from './forgot/forgot.component';


@NgModule({
  declarations: [
    AppComponent,
    AddFarmerComponent,
    ForgotComponent
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
