import { Component, OnInit } from '@angular/core';
import { RecipeManagementService } from '../../../Services/recipe-management-service';
import { RecipeViewModel } from '../../../Models/Recipe/recipe-view-model';

@Component({
  selector: 'app-recipe-view',
  templateUrl: './recipe-view.component.html',
  styleUrls: ['./recipe-view.component.css']
})
export class RecipeViewComponent implements OnInit {

  recipesList : RecipeViewModel[];
  constructor(private recipeManagementService: RecipeManagementService) { }

  ngOnInit() {
    this.recipeManagementService.getAllRecipes().subscribe(data => {
      this.recipesList = data;
      console.log(this.recipesList);
    });
  }
}
