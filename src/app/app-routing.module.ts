import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddFarmerComponent } from './add-farmer/add-farmer.component';

const routes: Routes = [
  {path:'addFarmer',component:AddFarmerComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
