import { Injectable, Inject, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { RecipeViewModel } from '../Models/Recipe/recipe-view-model';
import { URLMapper } from '../app.urlmapping'
import { RequestOptions } from '@angular/http';



@Injectable()
export class RecipeManagementService {
    @Input() recipesList: RecipeViewModel[]
    INGREDIENTS_LIMIT = 9;
    ACTIONS_LIMIT = 2;
    constructor(private _http: HttpClient) { }
    sendRecipe(recipe: RecipeViewModel) {
        let headers = new HttpHeaders({ 'Content-Type': 'application/json' });
        return this._http.post(URLMapper.API_URL + URLMapper.API_SAVE_RECIPE_URL_PATH, recipe, { headers: headers})
    }

    getAllRecipes() {
        return this._http.get<RecipeViewModel[]>(URLMapper.API_URL + URLMapper.API_GET_RECIPES_URL_PATH);
    }

    getRecipeByID(id) {
        for (var recipe of this.recipesList) {
            var recipeName = recipe.RecipeName;
            if(recipeName == id)
            {
                return recipe;
            }
        }
        return null;
    }
    deleteRecipeByID(id)
    {
        let headers = new HttpHeaders({ 'Content-Type': 'text/plain' });
        return this._http.put(URLMapper.API_URL + URLMapper.API_DELETE_RECIPE_BY_ID, {headers: headers, params: id});
    }

    get IngredientsLimit(): number {
        return this.INGREDIENTS_LIMIT;
    }
    get ActionsLimit(): number {
        return this.ACTIONS_LIMIT;
    }
}