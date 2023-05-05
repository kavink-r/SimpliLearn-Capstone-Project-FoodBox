import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingComponent } from './landing/landing.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FoodlistComponent } from './foodlist/foodlist.component';
import {HttpClientModule} from '@angular/common/http';
import { AdminpanelComponent } from './adminpanel/adminpanel.component';
import { FoodmasterComponent } from './foodmaster/foodmaster.component';
import { FoodsmasterComponent } from './foodsmaster/foodsmaster.component';
import { UsermasterComponent } from './usermaster/usermaster.component';
import { OrderhistoryComponent } from './orderhistory/orderhistory.component';
import { ChangepasswordComponent } from './changepassword/changepassword.component';
import { AddfoodComponent } from './addfood/addfood.component'

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    NavbarComponent,
    FoodlistComponent,
    AdminpanelComponent,
    FoodmasterComponent,
    FoodsmasterComponent,
    UsermasterComponent,
    OrderhistoryComponent,
    ChangepasswordComponent,
    AddfoodComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
