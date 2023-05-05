import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { foodItem } from 'src/models/foodItem';
import { status } from 'src/models/status';

@Injectable({
  providedIn: 'root'
})
export class FoodItemService {
baseurl:string='http://localhost:8080/api/food/'
  constructor(private http:HttpClient) { }

  getAllFoods():Observable<foodItem[]>{
    return this.http.get<foodItem[]>(this.baseurl+'all');
  }
  
  addFoodItem(item:foodItem):Observable<status>{
    return this.http.post<status>(this.baseurl+'addfood',item);
  }
  
  deleteFood(id:number):Observable<status>{
    return this.http.delete<status>(this.baseurl+'delete/'+id);
  }

  getFoodById(id:number):Observable<foodItem[]>{
    return this.http.get<foodItem[]>(this.baseurl+'find/'+id);
  }

  getFoodByName(name:string):Observable<foodItem[]>{
    let params = new HttpParams().set('name', name);
    return this.http.get<foodItem[]>(this.baseurl+'find',{params:params});
  }

  updateFoodDetails(food:foodItem):Observable<status>{
    return this.http.patch<status>(this.baseurl+'update/'+food.foodId,food);
  }
}
