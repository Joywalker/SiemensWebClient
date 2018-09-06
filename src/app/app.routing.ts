import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core'
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { LoginComponent } from './components/user/login-component/login-component';
import { RegisterComponent } from './components/user/register-component/register-component';
import { ForgotPasswordComponent } from './components/user/forgot-password/forgot-password.component';
import { StorageManagementComponent } from './components/storage-management/storage-management.component';
import { RecipeAddComponent } from './components/recipes/recipe-add/recipe-add.component';
import { RecipeViewComponent } from './components/recipes/recipe-view/recipe-view.component';
import { RestorePasswordComponent } from './components/user/restore-password/restore-password.component';
import { AuthGuard } from './auth.guard';



export const router: Routes = [
    { path: '',  redirectTo: 'user/login', pathMatch: 'full', canActivate: [AuthGuard] },
    { path: 'user/login', component: LoginComponent },
    { path: 'user/forgotPassword', component: ForgotPasswordComponent },
    { path: 'user/forgotPassword/restore', component: RestorePasswordComponent },
    { path: 'welcome', component: LandingPageComponent, canActivate: [AuthGuard]},
    { path: 'register', component: RegisterComponent,canActivate: [AuthGuard] },
    { path: 'storage', component: StorageManagementComponent,canActivate: [AuthGuard] },
    { path: 'recipe/add', component: RecipeAddComponent, canActivate: [AuthGuard], children: [
        { path: ':id', component: RecipeAddComponent },
       
    ]},
    { path: 'welcome/recipe/get', component: RecipeViewComponent },
    

];

export const routes: ModuleWithProviders = RouterModule.forRoot(router);