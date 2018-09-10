import { Injectable } from '@angular/core';
import { map } from "rxjs/operators";
import { Router } from '@angular/router';



import { User, PermissionsEnum } from '../Models/user-rights-enums'
import { UserManagementService } from './user.management.service';
import { Observable } from 'rxjs/internal/Observable';
import { UserViewModel } from '../Models/user-view-model';


@Injectable()
export class AuthService {
    private permissions: PermissionsEnum[] = null;
    private redirectURL: string = 'welcome';
    private loginURL: string = 'user/login';
    private isLoggedIn: boolean = false;
    private loggedInUser: User;

    constructor(private myRoute: Router, private _userManagementService: UserManagementService) { }
    isUserAuthenticated(username: string, password: string): Observable<boolean> {
        const user = new UserViewModel(username, password);
        return this._userManagementService.loginUser(user).pipe(
            map((collection: {[key: string]: PermissionsEnum[]}) => {
                let role = Object.keys(collection)[0];
                let permissions = Object.values(collection);
                if (role != '' && role != null) {
                    this.isLoggedIn = true;
                    this.setUser(username, role);
                    this.setUserPermissions(permissions);
                } else {
                    this.isLoggedIn = false;
                }
                return this.isLoggedIn;
            })
        );
    }
    setUserPermissions(permissions) {
        this.permissions = permissions;
    }
    setUser(username: string, role: string) {
        this.loggedInUser = new User(username, role);
    }
    isUserLoggedIn(): boolean {
        return this.isLoggedIn;
    }
    isUserAdmin() {
        return (this.loggedInUser.role == 'ADMIN')? true : false;
    }
    isUserOperator() {
        return (this.loggedInUser.role == 'OPERATOR')? true : false;
    }
    isUserEngineer() {
        return (this.loggedInUser.role == 'ENGINEER')? true : false;
    }
    getUserPermissions(){
        return this.permissions;
    }
    getRedirectUrl(): string {
        return this.redirectURL;
    }
    setRedirectUrl(url: string): void {
        this.redirectURL = url;
    }
    getLoginUrl(): string {
        return this.loginURL;
    }
    getLoggedInUser(): User {
        return this.loggedInUser;
    }
    logoutUser(): void {
        this.isLoggedIn = false;
    }
}