import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserModel } from '../../../../domain/models/user.model';
import { LoginUserUsecase } from '../../../../domain/usecases/users/login-user.usecase';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent {
 

loginForm=this.fb.group({
    email:['',Validators.required],
    password:['',Validators.required],
    remember:['false',Validators.required]
  });
  constructor(private fb:FormBuilder,
              private login:LoginUserUsecase) { }

  
 
  onSubmit(){
      const user:UserModel=this.loginForm.value;
      this.login.execute(user).subscribe((value)=>{
        if(value){
          
        }
      });
  }
}
