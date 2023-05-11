import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';
import { cart } from 'src/models/cart';
import { cartitem } from 'src/models/cartitem';
import { CartService } from 'src/services/cart.service';
import { LoginService } from 'src/services/login.service';

@Component({
  selector: 'app-viewcart',
  templateUrl: './viewcart.component.html',
  styleUrls: ['./viewcart.component.css']
})
export class ViewcartComponent {
  cart:cart;
  checkoutstatus:{
    checkout:boolean,
    paymentgateway:boolean
  }
constructor(
  private cartservice:CartService, 
  private loginservice:LoginService,
  private router:Router){}
ngOnInit(){
  this.cart=this.cartservice.getcart();
  this.checkoutstatus=this.cartservice.getcheckoutstatus();
}
removefromcart(item:cartitem){
  this.cartservice.removefromcart(item.food.foodId);
}
changequantity(item:cartitem,event:any){
  this.cartservice.changequantity(item.food.foodId,event.target.value);
}
Checkout(){
  if(!this.loginservice.getuserloginstatus()){
    alert("You are not logged in!! Kindly login to continue!!");
    this.router.navigateByUrl("signin");
    return;
  }
  this.checkoutstatus.checkout=true;
}

}
