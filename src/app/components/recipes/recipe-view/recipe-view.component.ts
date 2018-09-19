import { Component, OnInit, AfterContentInit, AfterViewChecked } from '@angular/core';
import { RecipeManagementService } from '../../../Services/recipe-management.service';
import { RecipeViewModel } from '../../../Models/Recipe/recipe-view-model';
import { Router } from '@angular/router';
import * as $ from 'jquery'
@Component({
  selector: 'app-recipe-view',
  templateUrl: './recipe-view.component.html',
  styleUrls: ['./recipe-view.component.css']
})
export class RecipeViewComponent implements OnInit {



  recipesList: RecipeViewModel[];
  recipe: RecipeViewModel;
  isReady: boolean = false;
  constructor(private recipeManagementService: RecipeManagementService,
    private router: Router) { }

  ngOnInit() {
    this.recipeManagementService.getAllRecipes().subscribe(data => {
      console.log(data);
      this.recipeManagementService.recipesList = data;
      this.recipesList = this.recipeManagementService.recipesList;
      this.isReady = true;
    });
  }
  editRecipe(recipeName) {
    this.router.navigateByUrl("/recipe/edit/" + recipeName);
  }

  toggle(event) {
    var btnID = event.srcElement.id;
    var tableToShow = $(".table-responsive").children("table").children("div").get();
    var index = tableToShow.findIndex(x => x.id == btnID);
    $(tableToShow[index]).toggle(300);
  }
}
