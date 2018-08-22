import { Injectable, Inject } from '@angular/core';
import { Response, Http, } from '@angular/http';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { UserModel } from 'src/app/Models/user-model';
import { UserViewModel } from '../Models/user-view-model';



@Injectable()
export class UserManagementService {

    myAppUrl: string = "http://localhost:50161/";
    constructor(private _http: HttpClient) {
    }

    getAllUsers() {
            return this._http.get(this.myAppUrl + 'api/UserManagement/GetAll');
    }

    loginUser(user: UserViewModel) {
        let headers = new HttpHeaders({ 'Content-Type': 'application/json' });
        return this._http.post(this.myAppUrl + "api/User/Login", user, { headers: headers })
    }

    saveUser(user: UserModel) {
        let headers = new HttpHeaders({ 'Content-Type': 'application/json' });
        let body = user.Username+ ":" +user.Password;
        return this._http.post(this.myAppUrl + "api/User/Login", body, { headers: headers })
    }

    errorHandler(error: Response) {
        console.log(error);
        return Observable.throw(error);
    }
}