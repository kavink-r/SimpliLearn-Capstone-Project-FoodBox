import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { cart } from 'src/models/cart';
import { cartitem } from 'src/models/cartitem';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cart:cart = new cart();
  checkoutstatus:{
    checkout:boolean,
    paymentgateway:boolean
  } = {
    checkout:false,
    paymentgateway:false
  }
  constructor() { this.cart.cartitems=[]}

  public addtocart(item:cartitem){
    let cartitem=this.cart.cartitems.find(x=>x.food.foodId==item.food.foodId);
    if(cartitem){
      this.changequantity(cartitem.food.foodId,cartitem.quantity+1);
      return;
    }
  
    this.cart.cartitems.push(item);
    
  }
  changequantity(foodid:number,quantity:number){
    let cartitem=this.cart.cartitems.find(x=>x.food.foodId==foodid);
    if(!cartitem) return
    cartitem.quantity=quantity;
  }
  getcart():cart{
    return this.cart;
  }
  resetcart(){
    this.cart=new cart();
  }
  removefromcart(foodid:number){
    this.cart.cartitems = this.cart.cartitems.filter(c=>c.food.foodId !== foodid);
  }
  getcartitemquantity():number{
    return this.cart.cartitems.length;
  }
  getcheckoutstatus(){
    return this.checkoutstatus;
  }
}
