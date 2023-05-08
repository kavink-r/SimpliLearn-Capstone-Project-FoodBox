import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/services/login.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  currentUser:string = "guest";
  cartitems:number = 0;
  login:boolean=true;
  constructor(
    private loginservice:LoginService,
    private router:Router
  ){  }
  ngOnInit(){
    this.currentUser=this.loginservice.getcurrentuser();
    if(this.currentUser=="Guest"){
      this.login=false;
    }
  }
  logout(){
    this.loginservice.logout();
    this.router.navigateByUrl("logout");
    alert("Logout Successfull!!")
  }
}
