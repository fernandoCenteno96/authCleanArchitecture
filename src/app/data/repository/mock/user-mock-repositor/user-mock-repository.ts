import { Injectable } from '@angular/core';
import { UserRepository } from '../../../../domain/repository/user.repository';
import { UserMockRepositoryMapper } from './user-mock-repository-mapper';
import { UserModel } from '../../../../domain/models/user.model';
import { UserMockEntity } from './user-mock-entity';
import { Observable, from } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { Mapper } from '../../../../domain/base/mapper';
import { users } from './user-mock-data';
@Injectable({
    providedIn:'root'
})

export class UserMockRepository extends UserRepository{

    private mapper = new UserMockRepositoryMapper();
    listUser:UserMockEntity[];
    user:UserModel={
        id:'1',
        email:'user@test.com',
        name:'user test',
        phone:'123456788',
        password:'12345'
    }
    constructor(){
        super();
        this.listUser=users;
        
    }
    addUser(user:UserModel):Observable<UserModel>{
        user.id = ( this.listUser.length + 1).toString();
        this.listUser.push(this.mapper.mapTo(user));

        return from([user]).pipe( map(this.mapper.mapTo));  
    }
    loginUser(user:UserModel):Observable<UserMockEntity>{
      
        this.listUser.forEach(element => {
            if(element.email===user.email){
              if(element.password===user.password){
                  
              }
                
            }
            
        });

       return from([user]).pipe(map(this.mapper.mapTo));
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