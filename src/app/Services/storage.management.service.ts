import { Injectable, Inject } from '@angular/core';
import { Response, Http, } from '@angular/http';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { StorageEntryViewModel } from '../Models/storage-entry-view-model';
import { URLMapper } from '../app.urlmapping';



@Injectable()
export class StorageManagementService {
    constructor(private _http: HttpClient) {
        
    }

    getAllDataFromStorage() {
        let headers = new HttpHeaders({ 'Content-Type': 'application/json' });
        return this._http.get<Map<number, StorageEntryViewModel[]>>(URLMapper.API_URL + URLMapper.API_GET_STORAGE_STATUS_URL_PATH);
    }
    
    errorHandler(error: Response) {
        console.log(error);
        return Observable.throw(error);
    }
}