import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { routes } from '../app/app.routing';
import { MatSidenavModule } from '@angular/material/sidenav';
import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatCheckboxModule } from '@angular/material';
import { SidebarModule } from 'ng-sidebar';
import { AuthService } from './Services/auth-service';


import { MapValuesPipe } from './Services/get-values-pipe';

import { AppComponent } from './app.component';
import { RegisterComponent } from './components/user/register-component/register-component';
import { LoginComponent } from './components/user/login-component/login-component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { ForgotPasswordComponent } from './components/user/forgot-password/forgot-password.component';
import { StorageManagementComponent } from './components/storage-management/storage-management.component';
import { UserManagementService } from './Services/user.management.service';
import { StorageManagementService } from './Services/storage.management.service';
import { RecipeManagementService } from './Services/recipe-management-service';
import { RecipeAddComponent } from './components/recipes/recipe-add/recipe-add.component';
import { RecipeViewComponent } from './components/recipes/recipe-view/recipe-view.component';
import { RestorePasswordComponent } from './components/user/restore-password/restore-password.component';
import { AuthGuardService } from './Services/auth-guard-service';



@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    LandingPageComponent,
    ForgotPasswordComponent,
    StorageManagementComponent,
    MapValuesPipe,
    RecipeAddComponent,
    RecipeViewComponent,
    RestorePasswordComponent

  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    routes,
    MatSidenavModule,
    MatButtonModule,
    BrowserAnimationsModule,
    MatCheckboxModule,
    SidebarModule.forRoot(),


  ],
  providers: [UserManagementService, StorageManagementService, RecipeManagementService, AuthService,AuthGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
