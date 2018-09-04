import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { UserManagementService } from '../../../Services/user.management.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {

  forgotPasswordForm: FormGroup;
  @Input() cnpHint : string = "Insert 13 digits representing your personal identification number."
  @Input() employeeIDHint: string = "Insert your employee ID in order to continue."

  constructor(private _fb: FormBuilder,
    private _userManagementService: UserManagementService,
    private router: Router,
    private route: ActivatedRoute) { }

<<<<<<< HEAD
<<<<<<< Updated upstream
              ngOnInit() {
                this.forgotPasswordForm = this._fb.group({
                    CNP: ['', [Validators.required, Validators.pattern('[0-9]')]],
                    ID: ['', [Validators.required]],
                    FirstName: ['', [Validators.required]],
                    LastName: ['', [Validators.required]],
                })
            }
=======
=======
>>>>>>> a56c50629850f7937c1239546bba9369b3f9a36a
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
<<<<<<< HEAD
        this.router.navigate(["user/forgotPassword/restore",{cnp: response, skipLocationChange: true}]);
      }
    })
  }
>>>>>>> Stashed changes
=======
        this.router.navigate(["user/forgotPassword/restore",{cnp: response}]);
      }
    })
  }
>>>>>>> a56c50629850f7937c1239546bba9369b3f9a36a
}
