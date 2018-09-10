import { Injectable, Inject, OnDestroy } from '@angular/core';
import { Response, Http, } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { UserModel } from 'src/app/Models/user-model';
import { UserViewModel } from '../Models/user-view-model';
<<<<<<< HEAD
import { URLMapper } from '../app.urlmapping';
import { UserRestorePasswordViewModel } from '../Models/user-password-restore-view-model';
import { PermissionsEnum, UserTypes, User } from '../Models/user-rights-enums';
import { Observable } from 'rxjs/internal/Observable';


@Injectable()
export class UserManagementService implements OnDestroy {
    private permissions: {[key: string]: PermissionsEnum[]}
    private userType : UserTypes;
    private sessionState: boolean;
=======



@Injectable()
export class UserManagementService {

    myAppUrl: string = "http://localhost:50161/";
    constructor(private _http: HttpClient) {
        
    }
>>>>>>> feature/Client-002.RecipesManagement

    constructor(private _http: HttpClient) { }

    getAllUsers()
    {
        return this._http.get(URLMapper.API_URL+ URLMapper.API_GET_ALL_USERS);
    }
    loginUser(user: UserViewModel) {
        let headers = new HttpHeaders({ 'Content-Type': 'application/json' });
        return this._http.post(this.myAppUrl + "api/User/Login", user, { headers: headers })
    }
    getAllUsers() {
            return this._http.get(this.myAppUrl + 'api/UserManagement/GetAll');
    }
<<<<<<< HEAD
    
    saveUser(user: UserModel) {
        let headers = new HttpHeaders({ 'Content-Type': 'application/json' });
        let body = user.Username + ":" + user.Password;
        return this._http.post(URLMapper.API_URL + URLMapper.API_REGISTER_NEW_USER, body, { headers: headers })
    }
    updatePasswordForUserWith(cnp: string, newPassword: string) {
        let headers = new HttpHeaders({ 'Content-Type': 'Text' });
        const body = cnp + "|" + newPassword;
        return this._http.post(URLMapper.API_URL + URLMapper.API_UPDATE_USER_PASSWORD, body, { headers: headers })
    }
    checkIfUserExists(confirmationForm: UserRestorePasswordViewModel) {
        let headers = new HttpHeaders({ 'Content-Type': 'application/json' });
        return this._http.put(URLMapper.API_URL + URLMapper.API_CHECK_IF_USER_EXISTS, confirmationForm, { headers: headers })
    }

    setUserTypeAndPermissions(permissions)
    {
        if(permissions != null){
            this.permissions = permissions;
            this.sessionState = true;
        }
    }
    getRightsForUserRole(userRole: string)
    {
        return this._http.put(URLMapper.API_URL + URLMapper.API_GET_USER_RIGHTS, userRole);
=======


    saveUser(user: UserModel) {
        let headers = new HttpHeaders({ 'Content-Type': 'application/json' });
        let body = user.Username+ ":" +user.Password;
        return this._http.post(this.myAppUrl + "api/User/Login", body, { headers: headers })
>>>>>>> feature/Client-002.RecipesManagement
    }

    errorHandler(error: Response) {
        console.log(error);
        return Observable.throw(error);
    }

    ngOnDestroy() {

    }
}