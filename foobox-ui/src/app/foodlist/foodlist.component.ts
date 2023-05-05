import { Component } from '@angular/core';
import { FoodItemService } from 'src/services/food-item.service';

@Component({
  selector: 'app-foodlist',
  templateUrl: './foodlist.component.html',
  styleUrls: ['./foodlist.component.css']
})
export class FoodlistComponent {
foodItems:any;
constructor(private fooditemservice:FoodItemService){

}
ngOnInit(){
  this.fooditemservice.getAllFoods().subscribe(data=>{this.foodItems=data;});
  
}
}
