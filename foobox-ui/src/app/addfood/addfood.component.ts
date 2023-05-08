import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { foodItem } from 'src/models/foodItem';
import { FoodItemService } from 'src/services/food-item.service';

@Component({
  selector: 'app-addfood',
  templateUrl: './addfood.component.html',
  styleUrls: ['./addfood.component.css']
})
export class AddfoodComponent {
  item:foodItem = new foodItem();
  tagtemp:string="";
  constructor(private fooditemservice:FoodItemService, private router:Router){
    this.item.tag=[];
  }
  addtag(){
    this.item.tag.push(this.tagtemp);
    this.tagtemp="";
  }
  removetag(tag:string){
   let index= this.item.tag.findIndex(item=>item==tag);
   this.item.tag.splice(index,1);
  }

  addfood(){
    this.fooditemservice.addFoodItem(this.item).subscribe(data=>{
      if(data.status=="1"){
        console.log(data);
        alert("Food successfully added!!");
      }
    });
    this.router.navigateByUrl("adminpanel/foodmaster");
  }
}
