import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { user } from 'src/models/user';
import { UserService } from './user.service';
import { admin } from 'src/models/admin';
import { authentication } from 'src/models/authentication';
import { AdminService } from './admin.service';
import { firstValueFrom } from 'rxjs/internal/firstValueFrom';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private currentuser: string = "Guest"
  private currentusr: user;
  private adminloginstatus: boolean = false;
  private adminusr: admin;
  private userloginstatus: boolean = false;
  constructor(
    private http: HttpClient,
    private usrservice: UserService,
    private adminservice: AdminService
  ) { }

  public getcurrentuser(): string {
    return this.currentuser;
  }

  public getcurrentusrobject(): user {
    return this.currentusr;
  }
  public getcurrentadminobject(): admin {
    return this.adminusr;
  }
  public getadminloginstatus(): boolean {
    return this.adminloginstatus;
  }
  public getuserloginstatus(): boolean {
    return this.userloginstatus;
  }

  public async authenticateadmin(ad: admin): Promise<boolean> {
    this.logout();
    let authentication: boolean = false;
    await firstValueFrom(this.adminservice.adminauthenticate(ad)).then(data => {
      if (data.admin == "1") {
        if (data.authentication == "1") {
          alert("Authentication successfull!");
          this.currentuser="admin";
          this.adminloginstatus = true;
          let searchterm: string = "";
          if (ad.email) {
            searchterm = ad.email;
          } else if (ad.userName) {
            searchterm = ad.userName;
          }
          this.adminservice.findadmin(searchterm).subscribe(res => { this.adminusr = res; });
          authentication = true;
        } else {
          alert("bad credentials");
        }
      } else {
        alert("Admin user not found!")
      }
    });
    return authentication;
  }

  public async authenticateuser(usr: user): Promise<boolean> {

    this.logout();
    let authentication: boolean = false;

    await firstValueFrom(this.usrservice.finduser(usr.userName)).then(data => {

      if (data.password == usr.password) {

        alert("Authentication successfull!");
        this.userloginstatus = true;
        this.currentuser = data.firstName + ' ' + data.lastName;
        this.currentusr = data;
        authentication = true;

      } else {
        alert("Authentication Failed");
      }
    });
    console.log("Returning success message!!")
    return authentication;
  }

  public logout() {
    console.log("Logging out!!");
    this.adminloginstatus = false;
    this.userloginstatus = false;
    this.adminusr = new admin();
    this.currentuser = "Guest";
    this.currentusr = new user();

  }
}
