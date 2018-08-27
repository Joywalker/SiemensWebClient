import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {

  public selectedValue;
  recipeActionsArray = ['Mix', 'Cook'];
  recipeMaterialsArray = ['Potatoes', 'Sunflower Oil', 'Salt', 'Flavours', 'Paprika', 'BBQ', 'Pepper', 'Potatoes', 'Flour', 'Cheese', 'Starch'];
  recipeMeasurementUnitsArray = ['kg', 'g', 'mg'];
  recipeActionsTimeUnitsArray = ['min', 'hours', 'days'];
  ingredientsArray = new FormArray([]);
  actionsArray = new FormArray([]);
  recipesFormGroup: FormGroup;
  constructor(private _fb: FormBuilder) { }

  ngOnInit() {
    this.recipesFormGroup = new FormGroup({
      'ingredients': this.ingredientsArray,
      'actions': new FormGroup({
        'ActionName': new FormControl(null, Validators.required),
        'ActionTime': new FormControl(null, Validators.required),
        'MeasureUnit': new FormControl(null, Validators.required)
      })
    })
  }
  onAddRecipe() {
    const recipeCreationGroup = new FormGroup({
      'FeedStock': new FormControl(null, Validators.required),
      'Quantity': new FormControl(null, Validators.required),
      'Measurement': new FormControl(null, Validators.required),
    });
    (<FormArray>this.recipesFormGroup.get('ingredients')).push(recipeCreationGroup);
  }

  checkIfCanSelectTime(this) {

  }

  deleteRowAt(index: number) {
    const control = <FormArray>this.recipesFormGroup.controls['recipes'];
    if (confirm("Are you sure?")) {
      // remove the chosen row
      control.removeAt(index);
    }
  }

  finishRecipe() {
    console.log(this.recipesFormGroup);
  }
}
