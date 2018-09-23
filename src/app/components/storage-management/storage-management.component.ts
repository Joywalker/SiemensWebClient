import { Component, OnInit, Input, AfterViewInit, AfterViewChecked, AfterContentInit, AfterContentChecked } from '@angular/core';
import { Router } from '@angular/router';
import { StorageManagementService } from '../../Services/storage.management.service';
import { StorageEntryViewModel } from '../../Models/storage-entry-view-model';
import { FormBuilder } from '@angular/forms';
import { AuthService } from '../../Services/auth-service';
import { AlertsService } from 'angular-alert-module';
import * as $ from 'jquery'
@Component({
  selector: 'app-storage-management',
  templateUrl: './storage-management.component.html',
  styleUrls: ['./storage-management.component.css']
})
export class StorageManagementComponent implements OnInit {
  @Input() successMessage;
  isDataFetched = false;
  isLoaded: boolean = false;
  alert: any;
  storageMap?: Map<number, StorageEntryViewModel[]> = new Map<number, StorageEntryViewModel[]>();
  selectedStorage: StorageEntryViewModel[];
  constructor(private auth: AuthService,
    private storageService: StorageManagementService,
    private router: Router,
    private fb: FormBuilder) { }

  ngOnInit() {
    this.storageService.getAllDataFromStorage().subscribe(data => {
      this.storageMap = data;
      this.isLoaded = true;
      $(window).ready(function(){
        this.isDataFetched = true;
        $('.container>.alert').fadeIn(5000).animate
      });

    }, err => {
      console.log(err);
      this.successMessage = 'Data fetch failed.';
      this.isDataFetched = false;
    }, () => {
      this.isDataFetched = true;
      this.successMessage = 'Data fetched successfully.';
      $(window).ready(function(){
        setTimeout(function() { $('.container>.alert').fadeOut().animate },1500);
      });
    });
  }
  toggleDepositViewWith(event) {
    var id = event.target.attributes.id.nodeValue;
    this.selectedStorage = this.storageMap[id];
    this.isLoaded = true;
  }
}