import { Injectable, Inject } from '@angular/core';
import { Response, Http, } from '@angular/http';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { StorageEntryViewModel } from '../Models/storage-entry-view-model';
import { URLMapper } from '../app.urlmapping';
import { StorageInfoViewModel } from '../Models/storage-info-view-model';
import { StorageEditComponent } from '../components/storage-management/storage-edit/storage-edit.component';
import { UpdateStorageViewModel } from '../Models/update-storage-view-model';



@Injectable()
export class StorageManagementService {

    constructor(private _http: HttpClient) {
        
    }

    getAllDataFromStorage() {
        let headers = new HttpHeaders({ 'Content-Type': 'application/json' });
        return this._http.get<Map<number, StorageEntryViewModel[]>>(URLMapper.API_URL + URLMapper.API_GET_STORAGE_STATUS_URL_PATH);
    }
    
    getInfoWarehouseInfo() {
        return this._http.get<StorageInfoViewModel[]>(URLMapper.API_URL + URLMapper.API_GET_STORAGE_GET_INFO);
    }
    putRequestToEditWarehouse(any){
        let headers = new HttpHeaders({ 'Content-Type': 'application/json' });
        return this._http.post(URLMapper.API_URL + URLMapper.API_EDIT_STORAGE_STATUS_URL_PATH, any, {headers: headers});
    }
    errorHandler(error: Response) {
        console.log(error);
        return Observable.throw(error);
    }
}