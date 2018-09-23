import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { map } from "rxjs/operators";
import { Observable } from 'rxjs/internal/Observable';



import { User, PermissionsEnum } from '../Models/user-rights-enums'
import { UserManagementService } from './user.management.service';
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
            map((response: any) => {
                if (response == 'FAILED') {
                    this.isLoggedIn = false;
                } else {
                    let role = Object.keys(response)[0];
                    let permissions = Object.values(response);
                    if (role != '' && role != null) {
                        console.log(role);
                        this.isLoggedIn = true;
                        this.setUser(username, role);
                        this.setUserPermissions(permissions);
                    }
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
        return (this.loggedInUser.role == 'ADMIN') ? true : false;
    }
    isUserOperator() {
        return (this.loggedInUser.role == 'OPERATOR') ? true : false;
    }
    isUserEngineer() {
        return (this.loggedInUser.role == 'ENGINEER') ? true : false;
    }
    getUserPermissions() {
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