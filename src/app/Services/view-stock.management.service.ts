import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { URLMapper } from "../app.urlmapping";

@Injectable()
export class ViewStockManagementService {
    constructor(private _http: HttpClient) { }

    getStockData()
    {
        return this._http.get(URLMapper.API_URL + URLMapper.API_GET_STOCK_DATA);
    }
    getLastMonthEvaluationGraphData()
    {
        return this._http.get(URLMapper.API_URL + URLMapper.API_GET_STOCK_GRAPH_DATA);
    }
}