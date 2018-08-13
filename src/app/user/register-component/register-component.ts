import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserManagementService } from '../../Services/user.management.service';
import { UserModel } from '../../Models/user-model';
declare var jquery: any;
declare var $: any;
import { $, jQuery } from 'jquery';
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

  togglePassword() {
    $(".toggle-password").click(function () {
      $(this).toggleClass("fa-eye fa-eye-slash");
      var input = $($(this).attr("toggle"));
      if (input.attr("type") == "password") {
        input.attr("type", "text");
      } else {
        input.attr("type", "password");
      }
    });
  }
  ngOnInit() {
    this.userRegistrationForm = this._fb.group({
      ID: ['', [Validators.required]],
      Type: ['', [Validators.required]],
      FirstName: ['', [Validators.required]],
      LastName: ['', [Validators.required]],
      CNP: ['', [Validators.required]],
      Password: ['', [Validators.required]],
    })
  }

  onSubmit() {

    this.userModel = <UserModel>this.userRegistrationForm.value;
    this._userManagementService.saveUser(this.userModel)
      .subscribe(result => {
        console.log(result);
      })
  }

}
