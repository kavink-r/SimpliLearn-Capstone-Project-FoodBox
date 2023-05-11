import { Component } from '@angular/core';
import { Bookings } from 'src/models/Bookings';
import { cart } from 'src/models/cart';
import { BookingService } from 'src/services/booking.service';
import { CartService } from 'src/services/cart.service';
import { LoginService } from 'src/services/login.service';

@Component({
  selector: 'app-paymentgateway',
  templateUrl: './paymentgateway.component.html',
  styleUrls: ['./paymentgateway.component.css']
})
export class PaymentgatewayComponent {
cart:cart;
bkng: Bookings = {
  bookingId: 0,
  userId: 0,
  bookingDetails: [],
  bookingAmount: 0,
  bookingStamp: new Date()
}
bookingID: string='0';
constructor(
  private cartservice:CartService,
  private bookingservice:BookingService,
  private loginservice:LoginService
  ){}
ngOnInit(){
  this.cart=this.cartservice.getcart();
}
pay(){
let prompt:any;
prompt= confirm("Do you Confirm your purchase of "+this.cart.cartprice+" INR for the total order?");
if(prompt){
    this.bkng.userId = this.loginservice.getcurrentusrobject().userId;
    this.bkng.bookingAmount = this.cart.cartprice;
    this.bkng.bookingStamp = new Date();
    this.cart.cartitems.forEach(x => {
      this.bkng.bookingDetails.push(x.food.foodName +'--'+ x.quantity.toString()+' Nos.');
    });
    if(this.bkng.userId){
      this.bookingservice.saveBooking(this.bkng).subscribe(res => {
        console.log(res);
        this.bookingID = res.status
        alert("Order Placed!! Order ID -"+this.bookingID);
      });
      
}else{
  alert("Payment Aborted!");
}
}
}
}
