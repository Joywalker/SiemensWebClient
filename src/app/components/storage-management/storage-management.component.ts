import { Component, OnInit } from '@angular/core';
import { StorageManagementService } from '../../Services/storage.management.service';


@Component({
  selector: 'app-storage-management',
  templateUrl: './storage-management.component.html',
  styleUrls: ['./storage-management.component.css']
})
export class StorageManagementComponent implements OnInit {

  constructor(private storageService: StorageManagementService) { }

  ngOnInit() {
    this.storageService.getAllDataFromStorage().subscribe(list => {
      console.log(list[1]);
    })
  }

}
