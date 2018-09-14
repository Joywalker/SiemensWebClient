import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { URLMapper } from "../app.urlmapping";
import { OrderViewModel } from "../Models/order-view-model";

@Injectable()
export class OrdersManagementService {
    
    constructor(private _http: HttpClient) {}

    getOrdersForViewing()
    {
        return this._http.get(URLMapper.API_URL + URLMapper.API_GET_ORDERS);
    }

    placeOrder(order: OrderViewModel) {
        let headers = new HttpHeaders({ 'Content-Type': 'application/json' });
        return this._http.post(URLMapper.API_URL + URLMapper.API_PLACE_ORDER, order, {headers: headers});
    }
}