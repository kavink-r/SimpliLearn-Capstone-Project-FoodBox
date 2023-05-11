import { Component } from '@angular/core';
import { cart } from 'src/models/cart';
import { CartService } from 'src/services/cart.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent {
  cart:cart;
  checkoutstatus:{
    checkout:boolean,
    paymentgateway:boolean
  }
  constructor(private cartservice:CartService){}
  ngOnInit(){
    console.log("Checkout component initialised")
    this.cart=this.cartservice.getcart();
   this.checkoutstatus=this.cartservice.getcheckoutstatus();
  }
  paymentgateway(){
    
    this.checkoutstatus.paymentgateway=true;
   
  }
}
