import { Component, OnInit, Input } from '@angular/core';
import { map } from "rxjs/operators";
import { Observable } from 'rxjs/internal/Observable';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { StorageManagementService } from '../../../Services/storage.management.service';
import { StorageInfoViewModel } from '../../../Models/storage-info-view-model';
import { UpdateStorageViewModel } from '../../../Models/update-storage-view-model';
import * as $ from 'jquery'

@Component({
  selector: 'app-storage-edit',
  templateUrl: './storage-edit.component.html',
  styleUrls: ['./storage-edit.component.css']
})
export class StorageEditComponent implements OnInit {
  @Input() successMessage;
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
        var alertDIV = $('.div-center>.alert');
        if (response != '' && response == 'Ok'){
          this.successMessage = editStorageModel.Quantity+ "kg" + " of " +editStorageModel.MaterialName+" moved from "+editStorageModel.ID_SC+" to "+editStorageModel.ID_DC;
          $('#qttID').css('border','1px solid green');
          $(document).ready(function() {
            alertDIV.removeClass('alert-danger').addClass('alert-success');
            setTimeout(function() {alertDIV.fadeIn()},800);
            setTimeout(function() {alertDIV.fadeOut()},2200);
          })
        } else {
          this.successMessage = "Compartments must contain the SAME type of feedstock!";
          $(document).ready(function() {
            alertDIV.removeClass('alert-success').addClass('alert-danger');
            setTimeout(function() {alertDIV.fadeIn()},800);
            setTimeout(function() {alertDIV.fadeOut()},3000);
          })
          $('#qttID').css('border','2px solid red');
        }
      })
    }
  }
}
