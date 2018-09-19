import { Component, OnInit, Input, AfterViewChecked, AfterViewInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { SalesManagementService } from '../../Services/sales-management.service';
import * as $ from 'jquery';
import { SellOrderViewModel } from '../../Models/sell-order-view-model';
import { Router } from '@angular/router';
import { RecipeManagementService } from '../../Services/recipe-management.service';
@Component({
  selector: 'app-sales',
  templateUrl: './sales.component.html',
  styleUrls: ['./sales.component.css']
})
export class SalesComponent implements OnInit, AfterViewInit {
  @Input() priceTVA;
  salesModelForm: FormGroup;
  clientsArray: String[] = [];
  recipesNameArray: String[] = [];
  constructor(private fb: FormBuilder,private recipeService: RecipeManagementService, private salesService: SalesManagementService, private router: Router) { }

  ngAfterViewInit() {
    $('#priceID').on('change', (e) => {
      var price = this.salesModelForm.get('PricePerUnit').value;
      this.priceTVA = this.getTVAPrice(price) + price;
    });
  }
  ngOnInit() {
    this.salesModelForm = this.fb.group({
      Client: new FormControl('', [Validators.required]),
      Amount: new FormControl('', [Validators.required, Validators.pattern('[0-9]*'), Validators.max(1000)]),
      Recipe: new FormControl('', [Validators.required]),
      PricePerUnit: new FormControl('', [Validators.required, Validators.pattern('[0-9]*'),  Validators.min(1)])
    })
    this.salesService.getClients().subscribe(response => {
      this.clientsArray = response;
      this.recipeService.getAllRecipes().subscribe(response => {
        if(response != undefined) {
          response.forEach(value => {
           this.recipesNameArray.push(value.RecipeName);
          })
        }
      })
    });
  }

  getTVAPrice(price) {
    return ((19/100)*price);
  }

  onSubmit() {
    let data = new SellOrderViewModel(this.salesModelForm.get('Client').value,
    this.salesModelForm.get('Recipe').value,
    this.salesModelForm.get('Amount').value);

    this.salesService.placeSellOrder(data).subscribe(response => {
      if(response)
      {
        alert('Succeeded');
        this.router.navigateByUrl('stock/view');
      } else 
      {
        alert('Not ok!' + response);
      }
    })
  }
}
