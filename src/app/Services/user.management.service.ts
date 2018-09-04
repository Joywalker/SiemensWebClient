import { Injectable, Inject } from '@angular/core';
import { Response, Http, } from '@angular/http';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { UserModel } from 'src/app/Models/user-model';
import { UserViewModel } from '../Models/user-view-model';
import { UserRestorePasswordViewModel } from '../Models/user-password-restore-view-model';
import { URLMapper } from '../app.urlmapping';

@Injectable()
export class UserManagementService {
    constructor(private _http: HttpClient) {}

    loginUser(user: UserViewModel) {
        let headers = new HttpHeaders({ 'Content-Type': 'application/json' });
        return this._http.post(URLMapper.API_URL + URLMapper.API_LOGIN_USER_URL_PATH, user, { headers: headers })
    }

    saveUser(user: UserModel) {
        let headers = new HttpHeaders({ 'Content-Type': 'application/json' });
        let body = user.Username+ ":" +user.Password;
        return this._http.post(URLMapper.API_URL + URLMapper.API_REGISTER_NEW_USER, body, { headers: headers })
    }
    updatePasswordForUserWith(cnp: string, newPassword: string)
    {
        let headers = new HttpHeaders({ 'Content-Type': 'application/json' });
        const body = cnp + "|" + newPassword;
        return this._http.post(URLMapper.API_URL + URLMapper.API_UPDATE_USER_PASSWORD, body, {headers: headers})
    }
    checkIfUserExists(confirmationForm: UserRestorePasswordViewModel) {
        let headers = new HttpHeaders({ 'Content-Type': 'application/json' });
        return this._http.put(URLMapper.API_URL + URLMapper.API_CHECK_IF_USER_EXISTS, confirmationForm, {headers: headers})
    }
    errorHandler(error: Response) {
        console.log(error);
        return Observable.throw(error);
    }
}