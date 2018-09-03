import { Component, OnInit } from '@angular/core';
import { RecipeManagementService } from '../../../Services/recipe-management-service';
import { RecipeViewModel } from '../../../Models/Recipe/recipe-view-model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-recipe-view',
  templateUrl: './recipe-view.component.html',
  styleUrls: ['./recipe-view.component.css']
})
export class RecipeViewComponent implements OnInit {

  recipesList : RecipeViewModel[];
  recipe: RecipeViewModel;
  isReady : boolean = false;
  constructor(private recipeManagementService: RecipeManagementService,
              private router: Router) { }

  ngOnInit() {
    this.recipeManagementService.getAllRecipes().subscribe(data => {
      this.recipeManagementService.recipesList = data;
      this.recipesList = this.recipeManagementService.recipesList;
      this.isReady = true;
    });
  }

  editRecipe(recipeName)
  {
    this.router.navigateByUrl("/recipe/add/"+recipeName);
  }
}
