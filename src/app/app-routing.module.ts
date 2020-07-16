import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';


import { AuthLayoutComponent } from './presentation/views/@pages/layout/auth-layout/auth-layout.component';

import { SigninComponent } from './presentation/views/sessions/signin/signin.component';
import { SignupComponent } from './presentation/views/sessions/signup/signup.component';
import { ForgotComponent } from './presentation/views/sessions/forgot/forgot.component';
import { ListUserComponent } from './presentation/views/user/list-user/list-user.component';

export const AppRoutes: Routes = [
   { 
    path: '',
    redirectTo:'signin',
    pathMatch:'full'
    },
    { 
     path: '',
     component: AuthLayoutComponent,
     children:[
        { 
            path: 'signin',
            component: SigninComponent 
        },
        { 
            path: 'signup',
            component: SignupComponent 
        },
        { 
            path: 'forgot',
            component: ForgotComponent 
        }
     ]
    },
    {
        path:'list-user',
        component:ListUserComponent
    }


];



