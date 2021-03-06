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
import { StorageEditComponent } from './components/storage-management/storage-edit/storage-edit.component';
import { OrdersComponent } from './components/orders/orders-view/orders.component';
import { OrdersAddComponent } from './components/orders/orders-add/orders-add.component';
import { ViewStockComponent } from './components/view-stock/view-stock.component';



export const router: Routes = [
    { path: 'welcome', component: LandingPageComponent},
    { path: 'user/login', component: LoginComponent },
    { path: 'user/forgotPassword', component: ForgotPasswordComponent },
    { path: 'user/forgotPassword/restore', component: RestorePasswordComponent },
    { path: 'register', component: RegisterComponent,canActivate: [AuthGuardService] },
    { path: 'storage', component: StorageManagementComponent, canActivate: [AuthGuardService] }, //d
    { path: 'storage/edit', component: StorageEditComponent, canActivate: [AuthGuardService] }, // d
    { path: 'user/register', component: RegisterComponent},
    { path: 'storage', component: StorageManagementComponent,canActivate: [AuthGuardService] },
    { path: 'recipe/add', component: RecipeAddComponent, canActivate: [AuthGuardService]},
    { path: 'recipe/edit/:id', component: RecipeAddComponent, canActivate: [AuthGuardService] },
    { path: 'recipe/get', component: RecipeViewComponent, canActivate: [AuthGuardService]},
    { path: 'stock/view', component: ViewStockComponent, canActivate: [AuthGuardService]},
    { path: 'orders/view', component: OrdersComponent, canActivate: [AuthGuardService]},
    { path: 'orders/add', component: OrdersAddComponent, canActivate: [AuthGuardService]}

    ];
export const routes: ModuleWithProviders = RouterModule.forRoot(router);