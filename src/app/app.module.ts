import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { routes } from '../app/app.routing';

import { AppComponent } from './app.component';
import { RegisterComponent } from './components/user/register-component/register-component';
import { LoginComponent } from './components/user/login-component/login-component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { ForgotPasswordComponent } from './components/user/forgot-password/forgot-password.component';
import { StorageManagementComponent } from './components/storage-management/storage-management.component';
import { UserManagementService } from './Services/user.management.service';
import { StorageManagementService } from './Services/storage.management.service';


@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    LandingPageComponent,
    ForgotPasswordComponent,
    StorageManagementComponent,
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    routes
  ],
  providers: [UserManagementService, StorageManagementService],
  bootstrap: [AppComponent]
})
export class AppModule { }
