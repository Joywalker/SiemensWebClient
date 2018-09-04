import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { PasswordValidator } from '../../../Models/password-validator';
import { ActivatedRoute, Router } from '@angular/router';
import { UserManagementService } from '../../../Services/user.management.service';

@Component({
  selector: 'app-restore-password',
  templateUrl: './restore-password.component.html',
  styleUrls: ['./restore-password.component.css']
})
export class RestorePasswordComponent implements OnInit {
  @Input() passwordHint: string = "Not allowed  { [ ; ' \ . , ! @ # $ % ^ & * ( |. Min length 10 characters";
  cnpTempVal: string;
  restorePasswordForm: FormGroup;
  constructor(private fb: FormBuilder,
              private route: ActivatedRoute,
              private router: Router,
              private _userManagementService : UserManagementService) {

    this.restorePasswordForm = fb.group({
      password: new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z0-9]*'), Validators.min(10)]),
      confirmPassword: new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z0-9]*'), Validators.min(10)])
    }, {
        validator: PasswordValidator.MatchPassword
      })
      this.cnpTempVal = this.route.snapshot.paramMap.get("cnp");
  }
  ngOnInit() {
  }
  onSubmit() {
      let password = this.restorePasswordForm.get('password').value;
      this._userManagementService.updatePasswordForUserWith(this.cnpTempVal, password).subscribe(response => {
        if(response)
        {
          this.router.navigateByUrl("user/login");
        }
      })
  }

}
