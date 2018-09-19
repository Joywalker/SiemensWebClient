import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { URLMapper } from "../app.urlmapping";
import { SellOrderViewModel } from "../Models/sell-order-view-model";

@Injectable()
export class SalesManagementService {

    /**
     *
     */
    constructor(private http: HttpClient) {}
    getClients() {
       return this.http.get<String[]>(URLMapper.API_URL+URLMapper.API_SALES_GET_CLIENTS);
    }

    placeSellOrder(sellOrderModel) {
        let headers = new HttpHeaders('Content-Type: application/json');
        return this.http.post<SellOrderViewModel>(URLMapper.API_URL+URLMapper.API_SALES_SELL, sellOrderModel, {headers: headers});
     }
}

