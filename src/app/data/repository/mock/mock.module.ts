import { NgModule } from "@angular/core";


//repositorys
import { UserRepository } from '../../../domain/repository/user.repository';

//Mock repository
import { UserMockRepository } from './user-mock-repositor/user-mock-repository';


@NgModule({
    declarations: [],
    imports: [ ],
    exports: [],
    providers: [
        {provide:UserRepository, useClass: UserMockRepository}
    ],
})
export class MockModule {}