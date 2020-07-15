import { Injectable } from '@angular/core';
import { UseCase } from '../../base/use-case';
import { UserModel } from '../../models/user.model';
import { UserRepository } from '../../repository/user.repository';
import { Observable } from 'rxjs';

@Injectable({
    providedIn:'root'
})
export class GetUserUsecase implements UseCase<void,UserModel>{
    constructor(private UserRepository:UserRepository) {  }

    execute():Observable<UserModel>{
        return this.UserRepository.getUser();
    }
}