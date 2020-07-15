import { Injectable } from '@angular/core';
import { UserRepository } from '../../../../domain/repository/user.repository';
import { UserMockRepositoryMapper } from './user-mock-repository-mapper';
import { UserModel } from '../../../../domain/models/user.model';
import { UserMockEntity } from './user-mock-entity';
import { Observable, from } from 'rxjs';
import { filter, map } from 'rxjs/operators';
@Injectable({
    providedIn:'root'
})

export class UserMockRepository extends UserRepository{

    private mapper = new UserMockRepositoryMapper();

    user:UserModel={
        id:'1',
        email:'user@test.com',
        name:'user test',
        phone:'123456788'
    }
    constructor(){
        super();
    }
    addUser(user:UserModel):Observable<UserMockEntity>{
        return from([user]).pipe(
                    map(this.mapper.mapTo));  
    }
    loginUser(user:UserModel):Observable<UserMockEntity>{
        return from([user]).pipe(
            map(this.mapper.mapTo));
    }
    authUser(user:UserModel):Observable<UserMockEntity>{
        return from([true]);
    }
    logoutUser(user:UserModel):Observable<UserMockEntity>{
        return from([true]);
    }
    getUser (user:UserModel):Observable<UserMockEntity>{
        return from([user]).pipe(map(this.mapper.mapFrom ));
    }
}