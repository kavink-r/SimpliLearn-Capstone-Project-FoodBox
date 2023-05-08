import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { admin } from 'src/models/admin';
import { user } from 'src/models/user';
import { LoginService } from 'src/services/login.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent {
person:string="User";
usrname:string;
password:string;
constructor(
  private loginservice:LoginService,
  private router:Router
){}
togglesignin(){
  if(this.person=="User"){
    this.person="Admin";
  }else{
    this.person="User";
  }
}
  async signin(){
  if(this.person=="User"){
    console.log("signing in as user............");
    let usr:user=new user();
    usr.userName=this.usrname;    
    usr.password=this.password;
   
   if(await this.loginservice.authenticateuser(usr)){
    
    alert("Sign in Successfull!")
    this.usrname="";
    this.password="";
    this.router.navigateByUrl("/");
   }else{
    alert("Sign in failed")
   }
  }else if(this.person=="Admin"){
    console.log("Signing in as Admin!!");
    let ad:admin =new admin();
    const expression: RegExp = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    if(expression.test(this.usrname)){
      ad.email=this.usrname;
    }else{
      ad.userName=this.usrname;
    }
    ad.password=this.password;

    if(await this.loginservice.authenticateadmin(ad)){
      alert("Login Successfull!");
      this.usrname="";
      this.password="";
      this.router.navigateByUrl("adminpanel");
    }else{
      alert("Login failed!!");
    }

  }
}
}
