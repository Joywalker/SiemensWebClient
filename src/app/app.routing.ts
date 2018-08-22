import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders} from '@angular/core'

import { LoginComponent } from './user/login-component/login-component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { RegisterComponent } from './user/register-component/register-component';
import { ForgotPasswordComponent } from './user/forgot-password/forgot-password.component';

export const router: Routes = [
    { path: 'welcome' , component: LandingPageComponent},
    { path: 'login' , component: LoginComponent},
    { path: 'register' , component: RegisterComponent},
    { path: 'login/forgotPassword' , component: ForgotPasswordComponent},
    
];

export const routes: ModuleWithProviders = RouterModule.forRoot(router);