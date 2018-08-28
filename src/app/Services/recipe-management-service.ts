import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { RecipeViewModel } from '../Models/Recipe/recipe-view-model';



@Injectable()
export class RecipeManagementService {

    myAppUrl: string = "http://localhost:50161/";
    constructor(private _http: HttpClient) {
        
    }
    sendRecipe(recipe: RecipeViewModel) {
        let headers = new HttpHeaders({ 'Content-Type': 'application/json' });
        return this._http.post(this.myAppUrl + "api/Recipe/Add", recipe, { headers: headers })
    }
}