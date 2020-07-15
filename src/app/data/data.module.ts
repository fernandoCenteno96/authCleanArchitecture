import { NgModule } from '@angular/core';


//databaseModule
import { dataBaseModule } from './repository/dataBase/dataBase.module';

//mockModule
import { MockModule } from './repository/mock/mock.module';


@NgModule({

    declarations:[],
    imports:[
        dataBaseModule,
        MockModule
    ],
    providers:[],
    exports:[]
})
export class DataModule{}