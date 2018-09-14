import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

declare var jquery: any;
declare var $: any;
import { $, jQuery } from 'jquery';
import { UserModel } from '../../../Models/user-model';
import { UserManagementService } from '../../../Services/user.management.service';
// export for others scripts to use

@Component({
  selector: 'app-register-component',
  templateUrl: './register-component.html',
  styleUrls: ['./register-component.css']
})
export class RegisterComponent implements OnInit {

  userRegistrationForm: FormGroup;
  userModel: UserModel;
  constructor(private _fb: FormBuilder,
    private _userManagementService: UserManagementService) { }

  ngOnInit() {
    this.userRegistrationForm = this._fb.group({
      Username: ['', [Validators.required]],
      Password: ['', [Validators.required]],
      CNP: ['', [Validators.required, Validators.pattern('[0-9]{13}')]],
      FirstName: ['', [Validators.required, Validators.pattern('[a-zA-Z ]*'), Validators.max(15)]],
      LastName: ['', [Validators.required, Validators.pattern('[a-zA-Z ]*'), Validators.max(15)]],
      Employee_ID: ['', [Validators.required, Validators.pattern('[0-9a-zA-z]{8}')]],
      UserRole: ['', [Validators.required]],
    })
  }

  onSubmit() {

    this.userModel = <UserModel>this.userRegistrationForm.value;
    console.log(this.userModel);
    this._userManagementService.saveUser(this.userModel)
      .subscribe(result => {
        console.log(result);
      })
  }

}
