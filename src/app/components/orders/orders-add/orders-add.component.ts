import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { OrdersManagementService } from '../../../Services/orders.management.service';
import { RecipeManagementService } from '../../../Services/recipe-management-service';
import { RecipeViewModel } from '../../../Models/Recipe/recipe-view-model';
import { OrderViewModel } from '../../../Models/order-view-model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-orders-add',
  templateUrl: './orders-add.component.html',
  styleUrls: ['./orders-add.component.css']
})
export class OrdersAddComponent implements OnInit {
  recipeNames: String[] = [];
  isLoaded: boolean = false;
  orderFormGroup: FormGroup;
  constructor(private orderService: OrdersManagementService,
    private _fb: FormBuilder,
    private recipeService: RecipeManagementService,
    private router: Router) {
    this.recipeService.getAllRecipes().subscribe((data: RecipeViewModel[]) => {
      data.forEach(value => {
        this.recipeNames.push(new String(value.RecipeName));
        this.isLoaded = true;
      })
    })
  }

  ngOnInit() {
    this.orderFormGroup = this._fb.group({
      Recipe: ['', Validators.required],
      Amount: ['', Validators.required],
    })
  }

  onSubmit() {
    const recipeName = this.orderFormGroup.get('Recipe').value;
    const amount = this.orderFormGroup.get('Amount').value;

    this.orderService.placeOrder(new OrderViewModel(recipeName, amount)).subscribe(response => {
      if (response.isPrototypeOf(String)) {
        if(response == 'SUCCESS')
        {
          alert('Success');
          this.router.navigateByUrl('orders/view');
        }
      } else {
        console.log(response);
      }
    })
  }
}
