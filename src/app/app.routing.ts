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
import { AuthGuardService } from './Services/auth-guard-service';



export const router: Routes = [
    { path: 'welcome', component: LandingPageComponent, canActivate: [AuthGuardService]},
    { path: 'user/login', component: LoginComponent },
    { path: 'user/forgotPassword', component: ForgotPasswordComponent },
    { path: 'user/forgotPassword/restore', component: RestorePasswordComponent },
    { path: 'register', component: RegisterComponent,canActivate: [AuthGuardService] },
    { path: 'storage', component: StorageManagementComponent,canActivate: [AuthGuardService] },
    { path: 'recipe/add', component: RecipeAddComponent, canActivate: [AuthGuardService]},
    { path: 'recipe/edit/:id', component: RecipeAddComponent, canActivate: [AuthGuardService] },
    { path: 'recipe/get', component: RecipeViewComponent, canActivate: [AuthGuardService]},
    { path: 'recipe/get', component: RecipeViewComponent, canActivate: [AuthGuardService]}
    ];

export const routes: ModuleWithProviders = RouterModule.forRoot(router);