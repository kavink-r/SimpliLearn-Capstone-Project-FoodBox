import {  NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './landing/landing.component';
import { AdminpanelComponent } from './adminpanel/adminpanel.component';
import { FoodmasterComponent } from './foodmaster/foodmaster.component';
import { UsermasterComponent } from './usermaster/usermaster.component';
import { OrderhistoryComponent } from './orderhistory/orderhistory.component';
import { ChangepasswordComponent } from './changepassword/changepassword.component';
import { AddfoodComponent } from './addfood/addfood.component';
import { AdduserComponent } from './adduser/adduser.component';
import { SigninComponent } from './signin/signin.component';
import { ViewcartComponent } from './viewcart/viewcart.component';
import { AdminAuthGuard } from 'src/gaurds/admin-auth.guard';

const routes: Routes = [ 
  {path:'', component:LandingComponent},
  {path:'logout',redirectTo:'',pathMatch:'full'},
  {path:'adminpanel', component:AdminpanelComponent, canActivate:[AdminAuthGuard],children:[
    {path:'foodmaster', component:FoodmasterComponent, children:[
      {path:'addfood',component:AddfoodComponent}
    ]},
    {path:'usermaster', component:UsermasterComponent,children:[
      {path:'adduser', component:AdduserComponent}
    ]},
    {path:'orderhistory', component:OrderhistoryComponent},
    {path:'changepassword', component:ChangepasswordComponent}
  ]},
  {path:"signin",component:SigninComponent},
  {path:"viewcart",component:ViewcartComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
 
}
