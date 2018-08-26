import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {

  public selectedValue;
  @Input() options : Array<String> = ['Cook','Mix','Cool','Package']
  recipesArray = new FormArray([]);
  recipesFormGroup: FormGroup;
  constructor(private _fb: FormBuilder) { }

  ngOnInit() {
    this.recipesFormGroup = new FormGroup({
      'recipes': this.recipesArray
    })
  }
  onAddRecipe() {
    const recipeCreationGroup = new FormGroup({
      'FeedStock': new FormControl(null, Validators.required),
      'Quantity': new FormControl(null, Validators.required),
      'Measurement': new FormControl(null, Validators.required),
      'Action': new FormControl(null, Validators.required),
    });
    (<FormArray>this.recipesArray).push(recipeCreationGroup);
  }

  checkIfCanSelectTime(this) {
   
  }
}
