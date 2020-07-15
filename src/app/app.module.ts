import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {AppRoutes } from './app-routing.module';
import { AppComponent } from './app.component';
import { SigninComponent } from './presentation/views/sessions/signin/signin.component';
import { SignupComponent } from './presentation/views/sessions/signup/signup.component';
import { ForgotComponent } from './presentation/views/sessions/forgot/forgot.component';
import { AuthLayoutComponent } from './presentation/views/@pages/layout/auth-layout/auth-layout.component';
import { RouterModule } from '@angular/router';
import { DataModule } from './data/data.module';

@NgModule({
  declarations: [
    AppComponent,
    SigninComponent,
    SignupComponent,
    ForgotComponent,
    AuthLayoutComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(AppRoutes),
    DataModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
