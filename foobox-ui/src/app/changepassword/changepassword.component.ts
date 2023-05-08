import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { admin } from 'src/models/admin';
import { AdminService } from 'src/services/admin.service';
import { LoginService } from 'src/services/login.service';

@Component({
  selector: 'app-changepassword',
  templateUrl: './changepassword.component.html',
  styleUrls: ['./changepassword.component.css']
})
export class ChangepasswordComponent {
oldpass:string;
newpass:string;
renewpass:string;
constructor(
  private loginservice:LoginService, 
  private adminservice:AdminService,
  private router:Router
  ){}
changepassword(){
  let adminusr:admin = this.loginservice.getcurrentadminobject();

  if(adminusr.password==this.oldpass){
    if(this.newpass==this.renewpass){
      adminusr.password=this.newpass;
      this.adminservice.changepassword(adminusr).subscribe(data=>{if(data.status=="1"){alert("Password changed successfully!")}});
      this.router.navigateByUrl("adminpanel");
    }else{
      alert("Passwords does not match!!");
      this.oldpass="";
      this.newpass="";
      this.renewpass="";
    }
  }else{
    alert("Bad credentials!")
      this.oldpass="";
      this.newpass="";
      this.renewpass="";
  }
}
}
