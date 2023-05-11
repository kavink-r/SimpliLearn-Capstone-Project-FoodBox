import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { cart } from 'src/models/cart';
import { CartService } from 'src/services/cart.service';
import { LoginService } from 'src/services/login.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  currentUser:string = "guest";
  cart:cart = new cart();
  cartitems:number=0;
  login:boolean=true;
  constructor(
    private loginservice:LoginService,
    private router:Router,
    private cartservice:CartService
  ){  }
  ngOnInit(){
    this.currentUser=this.loginservice.getcurrentuser();
    if(this.currentUser=="Guest"){
      this.login=false;
    }
    this.cart = this.cartservice.getcart();
  }
  logout(){
    this.loginservice.logout();
    this.currentUser=this.loginservice.getcurrentuser();
    this.login=false;
    this.router.navigateByUrl("logout");
    alert("Logout Successfull!!")
  }
}
