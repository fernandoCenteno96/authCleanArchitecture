import {Injectable} from '@angular/core';
import { UseCase } from '../../base/use-case';
import { UserModel } from '../../models/user.model';
import { UserRepository } from '../../repository/user.repository';
import { Observable } from 'rxjs';

@Injectable({
    providedIn:'root'
})

export class LoginUserUsecase implements UseCase<UserModel,UserModel> {
    constructor(private userRepository:UserRepository) {}

    execute(params:UserModel):Observable<UserModel>{
        
        return this.userRepository.loginUser(params);
    }
}