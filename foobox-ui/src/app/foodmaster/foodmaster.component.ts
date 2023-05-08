import { Component } from '@angular/core';
import { MatSlideToggleChange } from '@angular/material/slide-toggle';
import { foodItem } from 'src/models/foodItem';
import { FoodItemService } from 'src/services/food-item.service';

@Component({
  selector: 'app-foodmaster',
  templateUrl: './foodmaster.component.html',
  styleUrls: ['./foodmaster.component.css']
})
export class FoodmasterComponent {
  fooditems: any;
  constructor(private fditmservice:FoodItemService){

  }

  ngOnInit(){
    this.fditmservice.getAllFoods().subscribe(data=>this.fooditems=data);
  }
  toggleChanged(id:number,event:MatSlideToggleChange){
    let item:foodItem = {
    foodId:id,
    foodName:'',
    foodDesc:'',
    rate:0,
    rating:0,
    cookingTime:0,
    tag:[],
    cuisine:'',
    imgUrl:'',
    status:event.checked
    }
    this.fditmservice.changestatus(item).subscribe(data=>{});
    
  }
}
