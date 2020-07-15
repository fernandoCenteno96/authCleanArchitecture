import { Injectable } from '@angular/core';
import { UseCase } from '../../base/use-case';
import { UserRepository } from '../../repository/user.repository';
import { Observable } from 'rxjs';
@Injectable({
    providedIn:'root'
})
export class LogoutUserUsecase implements UseCase<void,boolean> {
    constructor(private UserRepository:UserRepository) {}

    execute():Observable<boolean>{
        return this.UserRepository.logoutUser();
    }
}