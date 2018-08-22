import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { routes } from '../app/app.routing';

import { AppComponent } from './app.component';
import { RegisterComponent } from './user/register-component/register-component';
import { UserManagementService } from './Services/user.management.service';
import { LoginComponent } from './user/login-component/login-component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { ForgotPasswordComponent } from './user/forgot-password/forgot-password.component';


@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    LandingPageComponent,
    ForgotPasswordComponent,
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    routes
  ],
  providers: [UserManagementService],
  bootstrap: [AppComponent]
})
export class AppModule { }
