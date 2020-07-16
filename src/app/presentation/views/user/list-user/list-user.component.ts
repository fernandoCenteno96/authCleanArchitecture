import { Component, OnInit } from '@angular/core';
import { GetUserUsecase } from '../../../../domain/usecases/users/get-user.usecase';
import { UserModel } from '../../../../domain/models/user.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.css']
})
export class ListUserComponent implements OnInit {
  user:UserModel;
  constructor(private getuser:GetUserUsecase) { 
   
  }

  ngOnInit(): void {
    this.getUser();
  }
  getUser():void{
    this.getuser.execute().subscribe(data=>{
      this.user=data;
      console.log(this.user);
    });
  }
}
