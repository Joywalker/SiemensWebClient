import { Injectable, Inject } from '@angular/core';
import { Response, Http, } from '@angular/http';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { UserModel } from 'src/app/Models/user-model';
import { UserViewModel } from '../Models/user-view-model';



@Injectable()
export class StorageManagementService {

    myAppUrl: string = "http://localhost:50161/";
    constructor(private _http: HttpClient) {
        
    }

    getAllDataFromStorage() {
        let headers = new HttpHeaders({ 'Content-Type': 'application/json' });
        return this._http.get(this.myAppUrl + "api/Storage");
    }
    
    errorHandler(error: Response) {
        console.log(error);
        return Observable.throw(error);
    }
}