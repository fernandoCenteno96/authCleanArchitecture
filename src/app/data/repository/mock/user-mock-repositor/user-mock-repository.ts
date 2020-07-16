import { Injectable } from '@angular/core';
import { UserRepository } from '../../../../domain/repository/user.repository';
import { UserMockRepositoryMapper } from './user-mock-repository-mapper';
import { UserModel } from '../../../../domain/models/user.model';
import { UserMockEntity } from './user-mock-entity';
import { Observable, from } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { Mapper } from '../../../../domain/base/mapper';
@Injectable({
    providedIn:'root'
})

export class UserMockRepository extends UserRepository{

    private mapper = new UserMockRepositoryMapper();
  
    user:UserModel={
        id:'1',
        email:'user@test.com',
        name:'user test',
        phone:'123456788',
        password:'122435'
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
    authUser():Observable<boolean>{
        return from([true]);
    }
    logoutUser():Observable<boolean>{
        return from([true]);
    }
    getUser ():Observable<UserModel>{
       
        return from([this.user]).pipe(map(this.mapper.mapFrom));
    }
}