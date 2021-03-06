import { Injectable, Inject, OnDestroy } from '@angular/core';
import { Response, Http, } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { UserModel } from 'src/app/Models/user-model';
import { UserViewModel } from '../Models/user-view-model';
import { URLMapper } from '../app.urlmapping';
import { PermissionsEnum, UserTypes, User } from '../Models/user-rights-enums';
import { Observable } from 'rxjs/internal/Observable';
import { UserRestorePasswordViewModel } from '../Models/user-restore-password-view-model';


@Injectable()
export class UserManagementService {
    private permissions: {[key: string]: PermissionsEnum[]}
    private userType : UserTypes;
    private sessionState: boolean;

    constructor(private _http: HttpClient) { }

    loginUser(user: UserViewModel) {
        let headers = new HttpHeaders({ 'Content-Type': 'application/json' });
        return this._http.post(URLMapper.API_URL + URLMapper.API_LOGIN_USER_URL_PATH, user, { headers: headers })
    }
    saveUser(user: UserModel) {
        let headers = new HttpHeaders({ 'Content-Type': 'application/json' });
        return this._http.post(URLMapper.API_URL + URLMapper.API_REGISTER_NEW_USER, user, { headers: headers })
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
    }

    errorHandler(error: Response) {
        console.log(error);
        return Observable.throw(error);
    }
}