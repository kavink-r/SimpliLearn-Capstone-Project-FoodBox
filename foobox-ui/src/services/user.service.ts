import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http'
import { user } from 'src/models/user';
import { Observable } from 'rxjs';
import { status } from 'src/models/status';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  baseurl:string='http://localhost:8080/api/user/';
  constructor(private http:HttpClient) { }
  
  getAllUsers():Observable<user[]>{
    return this.http.get<user[]>(this.baseurl+'all');
  }

  finduser(findterm:string):Observable<user>{
    let params = new HttpParams().set('name',findterm)
    return this.http.get<user>(this.baseurl+'finduser',{params:params});
  }

  updateuser(usr:user):Observable<status>{
    return this.http.patch<status>(this.baseurl+'updateuser/'+ usr.userId,usr);
  }

  adduser(usr:user):Observable<status>{
    return this.http.post<status>(this.baseurl+"adduser",usr);
  }

  deleteuser(id:number):Observable<status>{
    return this.http.delete<status>(this.baseurl+"remove/"+id);
  }
}
