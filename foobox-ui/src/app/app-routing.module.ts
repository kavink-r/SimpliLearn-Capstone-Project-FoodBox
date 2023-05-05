import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './landing/landing.component';
import { AdminpanelComponent } from './adminpanel/adminpanel.component';
import { FoodmasterComponent } from './foodmaster/foodmaster.component';
import { UsermasterComponent } from './usermaster/usermaster.component';
import { OrderhistoryComponent } from './orderhistory/orderhistory.component';
import { ChangepasswordComponent } from './changepassword/changepassword.component';
import { AddfoodComponent } from './addfood/addfood.component';

const routes: Routes = [ 
  {path:'', component:LandingComponent},
  {path:'adminpanel', component:AdminpanelComponent, children:[
    {path:'foodmaster', component:FoodmasterComponent, children:[
      {path:'addfood',component:AddfoodComponent}
    ]},
    {path:'usermaster', component:UsermasterComponent},
    {path:'orderhistory', component:OrderhistoryComponent},
    {path:'changepassword', component:ChangepasswordComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
 
}
