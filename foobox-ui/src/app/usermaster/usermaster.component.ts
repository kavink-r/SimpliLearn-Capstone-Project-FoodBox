import { Component } from '@angular/core';
import { user } from 'src/models/user';
import { UserService } from 'src/services/user.service';

@Component({
  selector: 'app-usermaster',
  templateUrl: './usermaster.component.html',
  styleUrls: ['./usermaster.component.css']
})
export class UsermasterComponent {
  users:user[];
  constructor(private usrservice:UserService){

  }
  ngOnInit(){
    this.usrservice.getAllUsers().subscribe(data=>{
      this.users=data;
    });
  }
  deleteuser(id:number){
    this.usrservice.deleteuser(id).subscribe(data=>{});
    this.users = this.users.filter(x=>x.userId!=id);
    alert("User Deleted!!")
  }
}
