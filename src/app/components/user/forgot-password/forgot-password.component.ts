import { Component, OnInit } from '@angular/core';
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

  constructor(private _fb: FormBuilder,
              private _userManagementService: UserManagementService,
              private router: Router) { }

              ngOnInit() {
                this.forgotPasswordForm = this._fb.group({
                    CNP: ['', [Validators.required, Validators.pattern('[0-9]')]],
                    ID: ['', [Validators.required]],
                    FirstName: ['', [Validators.required]],
                    LastName: ['', [Validators.required]],
                })
            }
}
