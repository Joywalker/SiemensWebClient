import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { UserManagementService } from '../../../Services/user.management.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {

  forgotPasswordForm: FormGroup;
   @Input() public cnpHint = "Personal Identification Number";
   @Input() public employeeIDHint = "Employee ID 8 characters.";
  constructor(private _fb: FormBuilder,
              private _userManagementService: UserManagementService,
              private router: Router) { }

  ngOnInit() {
    this.forgotPasswordForm = this._fb.group({
      CNP: ['', [Validators.required, Validators.pattern('[0-9]{13}')]],
      EmployeeID: ['', [Validators.required, Validators.pattern('[0-9a-zA-z]{8}')]],
      FirstName: ['', [Validators.required, Validators.pattern('[a-zA-Z ]*'), Validators.max(15)]],
      LastName: ['', [Validators.required, Validators.pattern('[a-zA-Z ]*'), Validators.max(15)]],
    })
  }

  onSubmit() 
  {
    this._userManagementService.checkIfUserExists(this.forgotPasswordForm.value).subscribe(response => {
      if(response != "" && response != null)
      {
        this.router.navigate(["user/forgotPassword/restore",{cnp: response, skipLocationChange: true}]);
      }
    })
  }
}
