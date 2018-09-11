import { Component, OnInit, AfterContentInit } from '@angular/core';
import { Router } from '@angular/router';
import { map } from "rxjs/operators";
import { Observable } from 'rxjs/internal/Observable';

import { ViewStockManagementService } from '../../Services/view-stock.management.service';
import { StockEntryViewModel } from '../../Models/stock-entry-view-model';

@Component({
  selector: 'app-view-stock',
  templateUrl: './view-stock.component.html',
  styleUrls: ['./view-stock.component.css']
})

export class ViewStockComponent implements OnInit, AfterContentInit {

  stockArray: Array<StockEntryViewModel>;
  constructor(private stockManagementService: ViewStockManagementService) { }
  public barChartOptions:any = {
    scaleShowVerticalLines: false,
    responsive: true
  };
  public barChartType:string = 'bar';

 
  public barChartData:any[] = [
  ];
  isOk = false;
 


  ngOnInit() {
    this.stockManagementService.getStockData().subscribe((stockArray: StockEntryViewModel[]) => {
      if (stockArray != null && stockArray.length != 0) {
        this.stockArray = stockArray;
      }
    },error => {console.log(error);}
     ,() => {
      this.stockManagementService.getLastMonthEvaluationGraphData().subscribe(
        ((collection: StockGraphDataModel[])  => {
          console.log(collection);
          collection.forEach(value => {
            const label = new Date(value.Key).toDateString();
            const data = {data: [value.Value], label: label};
            this.barChartData.push(data);
          });
          console.log(this.barChartData);
          this.isOk = true;
        }))
     })
  }

  ngAfterContentInit() {
    
  }
}

interface StockGraphDataModel {
  Key: Date;
  Value: number;
}
