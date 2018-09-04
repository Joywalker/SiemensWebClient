import { Injectable, Inject, OnDestroy } from '@angular/core';
import { Response, Http, } from '@angular/http';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { UserModel } from 'src/app/Models/user-model';
import { UserViewModel } from '../Models/user-view-model';
<<<<<<< HEAD
import { URLMapper } from '../app.urlmapping';

=======
import { UserRestorePasswordViewModel } from '../Models/user-password-restore-view-model';
import { URLMapper } from '../app.urlmapping';
>>>>>>> a56c50629850f7937c1239546bba9369b3f9a36a

@Injectable()
<<<<<<< Updated upstream
export class UserManagementService {
<<<<<<< HEAD
    constructor(private _http: HttpClient) {
        
    }
=======
export class UserManagementService implements OnDestroy {
    constructor(private _http: HttpClient) {}
>>>>>>> Stashed changes
=======
    constructor(private _http: HttpClient) {}
>>>>>>> a56c50629850f7937c1239546bba9369b3f9a36a

    loginUser(user: UserViewModel) {
        let headers = new HttpHeaders({ 'Content-Type': 'application/json' });
        return this._http.post(URLMapper.API_URL + URLMapper.API_LOGIN_USER_URL_PATH, user, { headers: headers })
<<<<<<< HEAD
    }
    getAllUsers() {
            return this._http.get(URLMapper.API_URL  + 'api/UserManagement/GetAll');
=======
>>>>>>> a56c50629850f7937c1239546bba9369b3f9a36a
    }

    saveUser(user: UserModel) {
        let headers = new HttpHeaders({ 'Content-Type': 'application/json' });
        let body = user.Username+ ":" +user.Password;
<<<<<<< HEAD
<<<<<<< Updated upstream
        return this._http.post(URLMapper.API_URL + URLMapper.API_REGISTER_USER_URL_PATH, body, { headers: headers })
=======
=======
>>>>>>> a56c50629850f7937c1239546bba9369b3f9a36a
        return this._http.post(URLMapper.API_URL + URLMapper.API_REGISTER_NEW_USER, body, { headers: headers })
    }
    updatePasswordForUserWith(cnp: string, newPassword: string)
    {
<<<<<<< HEAD
        let headers = new HttpHeaders({ 'Content-Type': 'Text' });
=======
        let headers = new HttpHeaders({ 'Content-Type': 'application/json' });
>>>>>>> a56c50629850f7937c1239546bba9369b3f9a36a
        const body = cnp + "|" + newPassword;
        return this._http.post(URLMapper.API_URL + URLMapper.API_UPDATE_USER_PASSWORD, body, {headers: headers})
    }
    checkIfUserExists(confirmationForm: UserRestorePasswordViewModel) {
        let headers = new HttpHeaders({ 'Content-Type': 'application/json' });
        return this._http.put(URLMapper.API_URL + URLMapper.API_CHECK_IF_USER_EXISTS, confirmationForm, {headers: headers})
<<<<<<< HEAD
>>>>>>> Stashed changes
=======
>>>>>>> a56c50629850f7937c1239546bba9369b3f9a36a
    }
    errorHandler(error: Response) {
        console.log(error);
        return Observable.throw(error);
    }

    ngOnDestroy() 
    {
        
    }
}