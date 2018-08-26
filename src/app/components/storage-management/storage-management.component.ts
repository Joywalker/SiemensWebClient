import { Component, OnInit } from '@angular/core';
import { Router, Resolve } from '@angular/router';
import { StorageManagementService } from '../../Services/storage.management.service';
import { StorageEntryViewModel } from '../../Models/storage-entry-view-model';
import { MapValuesPipe } from '../../Services/get-values-pipe'

@Component({
  selector: 'app-storage-management',
  templateUrl: './storage-management.component.html',
  styleUrls: ['./storage-management.component.css']
})
export class StorageManagementComponent implements OnInit {
  isLoaded: boolean = false;
  storageMap? : Map<number, StorageEntryViewModel[]> = new Map<number, StorageEntryViewModel[]>();
  selectedStorage: StorageEntryViewModel[];
  constructor(private storageService: StorageManagementService, private router: Router) {}

  ngOnInit() {
    this.storageService.getAllDataFromStorage().subscribe(data => {
     this.storageMap = data;
     this.isLoaded = true;
    })
  }

  toggleDepositViewWith(event) {
      var id = event.target.attributes.id.nodeValue;
      this.selectedStorage = this.storageMap[id];
      this.isLoaded = true;
  }

  getKeys(map)
  {
    return Object.keys(map);
  }
  getObjects(key)
  {
    return Object.values(key).values;
  }
}