import { UserModel } from '../models/user.model';
import  { Observable} from 'rxjs';

export abstract class UserRepository {
    abstract addUser(user:UserModel):Observable<UserModel>;
    abstract loginUser(user:UserModel):Observable<UserModel>;
    abstract authUser(): Observable<Boolean>;
    abstract logoutUser(): Observable<Boolean>;
    abstract getUser(): Observable<UserModel>;
}