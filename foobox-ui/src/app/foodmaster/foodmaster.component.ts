import { Component } from '@angular/core';
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
}
