import { Component } from '@angular/core';
import { cartitem } from 'src/models/cartitem';
import { foodItem } from 'src/models/foodItem';
import { CartService } from 'src/services/cart.service';
import { FoodItemService } from 'src/services/food-item.service';

@Component({
  selector: 'app-foodlist',
  templateUrl: './foodlist.component.html',
  styleUrls: ['./foodlist.component.css']
})
export class FoodlistComponent {
foodItems:foodItem[];
searchterm:string;
constructor(
  private fooditemservice:FoodItemService,
  private cartservice:CartService){

}
ngOnInit(){
  this.fooditemservice.getAllFoods().subscribe(data=>{this.foodItems=data;});
  
}

addtocart(item:foodItem){
   let crtitem= new cartitem();
   crtitem.food=item;
   this.cartservice.addtocart(crtitem);
}
searchfood(){
  this.foodItems=this.foodItems.filter(x=>{
   if( x.foodName.includes(this.searchterm)){
    return true;
   }else{
    return false;
   }
  });
  console.log("Resulting array-"+JSON.stringify(this.foodItems));
}
}
