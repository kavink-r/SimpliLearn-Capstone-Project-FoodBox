import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { admin } from 'src/models/admin';
import { authentication } from 'src/models/authentication';
import { status } from 'src/models/status';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  baseurl:string='http://localhost:8080/api/admin/';
  constructor(private http:HttpClient) {
    
   }
   addadminuser(ad:admin):Observable<status>{
    return this.http.post<status>(this.baseurl+"addAdminUser",ad);
   }
   findadmin(searchterm:string):Observable<admin>{
    let params=new HttpParams().set("q",searchterm);
    return this.http.get<admin>(this.baseurl+"findadmin",{params:params});
   }
   deleteadminuser(id:number):Observable<status>{
    return this.http.delete<status>(this.baseurl+"remove/"+id);
   }
   changepassword(ad:admin):Observable<status>{
    return this.http.put<status>(this.baseurl+"changepassword",ad);
   }
   adminauthenticate(ad:admin):Observable<authentication>{
    return this.http.post<authentication>(this.baseurl+"authenticate",ad);
   }
}
