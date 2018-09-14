import { Component, OnInit } from '@angular/core';
import { map } from "rxjs/operators";
import { Observable } from 'rxjs/internal/Observable';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { StorageManagementService } from '../../../Services/storage.management.service';
import { StorageInfoViewModel } from '../../../Models/storage-info-view-model';
import { UpdateStorageViewModel } from '../../../Models/update-storage-view-model';
import * as $ from 'jquery'
declare var $: any;

@Component({
  selector: 'app-storage-edit',
  templateUrl: './storage-edit.component.html',
  styleUrls: ['./storage-edit.component.css']
})
export class StorageEditComponent implements OnInit {

  storageEditFormGroup: FormGroup;
  depositsArray: number[] = [];
  compartmentsArray: number[] = [];
  feedstockArray: string[] = [];
  constructor(private fb: FormBuilder, private storageService: StorageManagementService) { }

  ngOnInit() {
    this.storageEditFormGroup = this.fb.group({
      ID_SC: new FormControl(''),
      ID_DC: new FormControl(''),
      MaterialName: new FormControl(''),
      Quantity: new FormControl('')
    });

    this.storageService.getInfoWarehouseInfo().subscribe(response => {
      response.forEach(entry => {
        if (entry) {
          this.depositsArray.push(entry.ID_warehouse);
          this.compartmentsArray.push(entry.ID_compartment);
          this.feedstockArray.push(entry.Name);
        }
      })
    })
  }

  onSubmit() {
    if (this.storageEditFormGroup.valid) {
      const model = this.storageEditFormGroup;
      const editStorageModel = new UpdateStorageViewModel(
        model.get('ID_SC').value,
        model.get('ID_DC').value,
        model.get('MaterialName').value,
        model.get('Quantity').value
      );

      this.storageService.putRequestToEditWarehouse(editStorageModel).subscribe(response => {
        if (response != '' && response == 'Ok!'){
          $('#qttID').css('border','1px solid green');
        } else {
          $('#qttID').css('border','2px solid red');
        }
      })
    }
  }
}
