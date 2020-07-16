import { Component} from '@angular/core';
import { FormBuilder, Validators, FormGroup ,FormControl} from '@angular/forms';
import { AddUserUsecase } from '../../../../domain/usecases/users/add-user.usecase';
import { UserModel } from '../../../../domain/models/user.model';
import { Router } from '@angular/router';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent  {
 

    signupForm =this.fb.group({
            name:['',Validators.required],
            password:['',Validators.required],
            email:['',Validators.required],
            phone:[''],
            accepTerms:['false']
          });
  
  constructor(private fb:FormBuilder,
              private AddUser:AddUserUsecase,
              private router:Router
              ) { }

  
 
  onSubmit(){
    const user:UserModel=this.signupForm.value;
    this.AddUser.execute(user).subscribe((value)=>{
      if(value){
        console.log('value of form',value);
        this.router.navigate(['list-user']);

      }

    },(error)=>{
      console.log('error in form',error);
    });
  }
}
