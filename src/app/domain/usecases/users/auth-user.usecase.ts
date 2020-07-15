import { Injectable } from '@angular/core';
import { UseCase } from '../../base/use-case';
import { UserModel } from '../../models/user.model';
import { UserRepository } from '../../repository/user.repository';
import { Observable } from 'rxjs';

@Injectable({
    providedIn:'root'
})

export class AuthUserUsecase implements UseCase<void,boolean> {
    constructor(private UserRepository:UserRepository) {}

    execute():Observable<boolean>{
        return this.UserRepository.authUser();
    }
}