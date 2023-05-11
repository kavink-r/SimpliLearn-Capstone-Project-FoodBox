import { foodItem } from "./foodItem";

export class cartitem{
    quantity:number=1;
    food:foodItem;
    get cartitemprice():number{
    return this.food.rate * this.quantity;
    }
}
