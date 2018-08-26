import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders} from '@angular/core'
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { LoginComponent } from './components/user/login-component/login-component';
import { RegisterComponent } from './components/user/register-component/register-component';
import { ForgotPasswordComponent } from './components/user/forgot-password/forgot-password.component';
import { StorageManagementComponent } from './components/storage-management/storage-management.component';
import { RecipesComponent } from './components/recipes/recipes.component';



export const router: Routes = [
    { path: 'welcome' , component: LandingPageComponent},
    { path: 'login' , component: LoginComponent},
    { path: 'register' , component: RegisterComponent},
    { path: 'login/forgotPassword' , component: ForgotPasswordComponent},
    { path: 'storage' , component: StorageManagementComponent},
    { path: 'recipe/add', component: RecipesComponent}
    
];

export const routes: ModuleWithProviders = RouterModule.forRoot(router);