import { Mapper } from '../../../../domain/base/mapper';
import { UserMockEntity } from './user-mock-entity';
import { UserModel } from '../../../../domain/models/user.model';
import { UserRepository } from '../../../../domain/repository/user.repository';



export class UserMockRepositoryMapper extends Mapper<UserMockEntity,UserModel>{
        mapFrom(params:UserMockEntity):UserModel{
            return {
                id:params.id,
                email:params.email,
                password:params.password,
                name:params.name,
                phone:params.phone
            }
        }
        mapTo(params:UserModel):UserMockEntity{
            return{
                id:params.id,
                email:params.email,
                password:params.password,
                name:params.name,
                phone:params.phone
            }
        }



}