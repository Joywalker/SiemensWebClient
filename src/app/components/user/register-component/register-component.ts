import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

declare var jquery: any;
declare var $: any;
import { UserModel } from '../../../Models/user-model';
import { UserManagementService } from '../../../Services/user.management.service';
import { Router } from '@angular/router';
// export for others scripts to use

@Component({
  selector: 'app-register-component',
  templateUrl: './register-component.html',
  styleUrls: ['./register-component.css']
})
export class RegisterComponent implements OnInit {

  public userRegistrationForm: FormGroup;
  public userModel: UserModel;
  @Input() responseMessage = "";
  constructor(private _fb: FormBuilder,
    private _userManagementService: UserManagementService,
    private _router: Router) { }

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
    this._userManagementService.saveUser(this.userModel)
      .subscribe(result => {
        if(result) {
          this.responseMessage = "User " + this.userModel.Username + " was added succesfully!";
          $(document).ready(function() {
            $('.container>.alert').addClass('alert-info');
            setTimeout(function(){$('.container>.alert').fadeIn()},200);
            setTimeout(function(){$('.container>.alert').fadeOut()},700);
          })
            setTimeout(() => {
              this._router.navigateByUrl("user/login");
            },1000)
        } else{
          this.responseMessage = "Failed to add user "+this.userModel.Username;
          $(document).ready(function() {
            $('.container>.alert').removeClass('alert-info').addClass('alert-danger');
            setTimeout(function(){$('.container>.alert').fadeIn()},200);
            setTimeout(function(){$('.container>.alert').fadeOut()},700);
          })
        }
      })
  }

}
