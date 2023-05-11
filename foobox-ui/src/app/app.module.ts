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
import { UsermasterComponent } from './usermaster/usermaster.component';
import { OrderhistoryComponent } from './orderhistory/orderhistory.component';
import { ChangepasswordComponent } from './changepassword/changepassword.component';
import { AddfoodComponent } from './addfood/addfood.component'
import { FormsModule } from '@angular/forms';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AdduserComponent } from './adduser/adduser.component';
import { SigninComponent } from './signin/signin.component';
import { ViewcartComponent } from './viewcart/viewcart.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { PaymentgatewayComponent } from './paymentgateway/paymentgateway.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    NavbarComponent,
    FoodlistComponent,
    AdminpanelComponent,
    FoodmasterComponent,
    UsermasterComponent,
    OrderhistoryComponent,
    ChangepasswordComponent,
    AddfoodComponent,
    AdduserComponent,
    SigninComponent,
    ViewcartComponent,
    CheckoutComponent,
    PaymentgatewayComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    MatSlideToggleModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
