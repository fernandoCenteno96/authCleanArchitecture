
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import {AppRoutes } from './app-routing.module';
import { AppComponent } from './app.component';


import { SigninComponent } from './presentation/views/sessions/signin/signin.component';
import { SignupComponent } from './presentation/views/sessions/signup/signup.component';
import { ForgotComponent } from './presentation/views/sessions/forgot/forgot.component';


import { AuthLayoutComponent } from './presentation/views/@pages/layout/auth-layout/auth-layout.component';
import { RouterModule } from '@angular/router';
import { DataModule } from './data/data.module';
import { ListUserComponent } from './presentation/views/user/list-user/list-user.component';


@NgModule({
  declarations: [
    AppComponent,
    AuthLayoutComponent,
    SigninComponent,
    SignupComponent,
    ForgotComponent,
    ListUserComponent,
    
  ],
  imports: [
    BrowserModule,
    
    
    DataModule,
    ReactiveFormsModule,
  
    RouterModule.forRoot(AppRoutes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
