import { cartitem } from "./cartitem";

export class cart{
    cartitems:cartitem[]=[];
    get cartprice():number{
        let totalprice:number=0;
        this.cartitems.forEach(x=>totalprice=totalprice+x.cartitemprice);
        return totalprice;
    }
}