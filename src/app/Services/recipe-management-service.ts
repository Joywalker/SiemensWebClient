import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { RecipeViewModel } from '../Models/Recipe/recipe-view-model';
import { URLMapper } from '../app.urlmapping'



@Injectable()
export class RecipeManagementService {
    constructor(private _http: HttpClient) {}
    sendRecipe(recipe: RecipeViewModel) {
        let headers = new HttpHeaders({ 'Content-Type': 'application/json' });
        return this._http.post(URLMapper.API_URL + URLMapper.API_SAVE_RECIPE_URL_PATH, recipe, { headers: headers })
    }
    getAllRecipes()
    {
        return this._http.get<RecipeViewModel[]>(URLMapper.API_URL + URLMapper.API_GET_RECIPES_URL_PATH);
    }
}