import { Ingredient } from "./ingredient-view-model";
import { RecipeAction } from "./action-view-model";
import { Action } from "rxjs/internal/scheduler/Action";

export class RecipeViewModel {
    public Ingredients: Ingredient[];
    public Actions: RecipeAction[];
    public RecipeName: String;

    constructor(name: String, ingredients: Ingredient[], actions: RecipeAction[])
    {
        this.Ingredients = ingredients;
        this.Actions = actions;
        this.RecipeName = name;
    }
    get ingredients(): Ingredient[] {
        return this.Ingredients;
    }

    get actions(): RecipeAction[] {
        return this.Actions;
    }

    get recipeName(): String {
        return this.RecipeName;
    }

    set ingredients(ingredientsArray: Ingredient[])
    {
        this.Ingredients = ingredientsArray;
    }

    set actions(actionsArray: RecipeAction[])
    {
        this.Actions = actionsArray;
    }

    set recipeName(name: String)
    {
        this.RecipeName = name;
    }
    
}