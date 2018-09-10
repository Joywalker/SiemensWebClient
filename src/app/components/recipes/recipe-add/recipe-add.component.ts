import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray, FormBuilder } from '@angular/forms';
import { RecipeManagementService } from '../../../Services/recipe-management-service';
import { isBoolean } from 'util';
import { RecipeAction } from '../../../Models/Recipe/action-view-model';
import { Ingredient } from '../../../Models/Recipe/ingredient-view-model';
import { RecipeViewModel } from '../../../Models/Recipe/recipe-view-model';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipe-add.component.html',
  styleUrls: ['./recipe-add.component.css']
})
export class RecipeAddComponent implements OnInit {
  @Input() recipeName: String = "";
  recipe: RecipeViewModel;
  recipeActionsArray = ['Mix', 'Cook'];
  recipeMaterialsArray = ['Potatoes', 'Sunflower Oil', 'Salt', 'Flavours', 'Paprika', 'BBQ', 'Pepper', 'Potatoes', 'Flour', 'Cheese', 'Starch'];
  recipeMeasurementUnitsArray = ['kg', 'g', 'mg'];
  recipeActionsTimeUnitsArray = ['min', 'hours', 'days', 'sec'];
  ingredientsArray = new FormArray([]);
  actionsArray = new FormArray([]);
  recipesFormGroup: FormGroup;
  private sub: any;

  constructor(private _fb: FormBuilder,
    private _recipeManagementService: RecipeManagementService,
    private _routeConfigService: ActivatedRoute,
    private _router: Router) { }

  ngOnInit() {
    this.recipesFormGroup = new FormGroup({
      'ingredients': this.ingredientsArray,
      'actions': this.actionsArray
    })
    this.sub = this._routeConfigService.params.subscribe(params => {
      var id = params['id'];
      if (id != null || id != '') {
        var recipe = this._recipeManagementService.getRecipeByID(id);
        this.recipeName = recipe.RecipeName;
        if (recipe != null) {
          recipe.Ingredients.forEach(ingredient => {
            this.ingredientsArray.push(
              new FormGroup({
                'FeedStock': new FormControl(ingredient.IngredientName, Validators.required),
                'Quantity': new FormControl(ingredient.Quantity, Validators.required),
                'Measurement': new FormControl(ingredient.MeasurementUnit, Validators.required),
              }))
          });
          recipe.Actions.forEach(action => {
            this.actionsArray.push(
              new FormGroup({
                'ActionName': new FormControl(action.ActionName, Validators.required),
                'ActionTime': new FormControl(action.Duration, Validators.required),
                'ActionTimeUnit': new FormControl(action.TimeMeasurementUnit, Validators.required),
              }))
          });
        }
      }
    });
  }

  addIngredient() {
    const ingredientElement = new FormGroup({
      'FeedStock': new FormControl(null, Validators.required),
      'Quantity': new FormControl(null, Validators.required),
      'Measurement': new FormControl(null, Validators.required),
    });
    (<FormArray>this.recipesFormGroup.get('ingredients')).push(ingredientElement);
  }

  addAction() {
    const action = new FormGroup({
      'ActionName': new FormControl(null, Validators.required),
      'ActionTime': new FormControl(null, Validators.required),
      'ActionTimeUnit': new FormControl(null, Validators.required),
    });
    (<FormArray>this.recipesFormGroup.get('actions')).push(action);
  }

  deleteRowAt(index: number, type: string) {
    if (type == 'action') {
      const control = <FormArray>this.recipesFormGroup.controls['actions'];
      if (confirm("Are you sure?")) {
        control.removeAt(index);
      }
    } else {
      const control = <FormArray>this.recipesFormGroup.controls['ingredients'];
      if (confirm("Are you sure?")) {
        control.removeAt(index);
      }
    }
  }
  // getting the actions from form and storing in an local array
  extractActionsFromForm() {
    var Actions: RecipeAction[] = new Array();
    var actions = this.recipesFormGroup.get('actions') as FormArray;
    for (let i = 0; i < actions.length; i++) {
      var action = new RecipeAction(
        actions.at(i).get('ActionName').value,
        actions.at(i).get('ActionTime').value,
        actions.at(i).get('ActionTimeUnit').value
      );
      Actions.push(action);
    }
    return Actions;
  }

  // getting the ingredients from form and storing in an local array
  extractIngredientsFromForm() {
    var Ingredients: Ingredient[] = new Array();
    var ingredients = this.recipesFormGroup.get('ingredients') as FormArray;
    for (let i = 0; i < ingredients.length; i++) {
      var ingredient = new Ingredient(
        ingredients.at(i).get('FeedStock').value,
        ingredients.at(i).get('Quantity').value,
        ingredients.at(i).get('Measurement').value
      );
      Ingredients.push(ingredient);
    }
    return Ingredients;
  }

  buildRecipe() {
    var ing = this.extractIngredientsFromForm();
    var act = this.extractActionsFromForm();
    return new RecipeViewModel(this.recipeName, ing, act);
  }

  finishRecipe() {
    var recipe = this.buildRecipe();
    this._recipeManagementService.sendRecipe(recipe).subscribe(response => {
      if (response == true) {
        alert('Recipe added succesfull');
      } else {
        alert('ERROR : check console');
        console.log(response);
      }
    })
  }

  deleteRecipe(recipeName) {
    this._recipeManagementService.deleteRecipeByID(this.recipeName).subscribe(response => {
      this._router.navigateByUrl("/recipe/get")
    })
  }
}
