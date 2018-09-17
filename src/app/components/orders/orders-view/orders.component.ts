import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { OrderViewModel } from '../../../Models/order-view-model';
import { OrdersManagementService } from '../../../Services/orders.management.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {

  orderFormGroup: FormGroup;
  ordersArray: OrderViewModel[] = [];
  constructor(private orderService: OrdersManagementService,
              private fb: FormBuilder) { }

  ngOnInit() {
    this.orderFormGroup = this.fb.group(new FormGroup({
      Recipe: new FormControl(''),
      Amount: new FormControl('')
    }));
    
    this.orderService.getOrdersForViewing().subscribe((data: OrderViewModel[]) => {
      if(data)
      {
        this.ordersArray = data;
      }
    })
  }
}
