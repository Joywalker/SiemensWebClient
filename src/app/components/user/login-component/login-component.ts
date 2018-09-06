import { Component, OnInit } from '@angular/core';
import { NgForm, FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

declare var jquery: any;
declare var $: any;
import { $, jQuery } from 'jquery';
import { UserManagementService } from 'src/app/Services/user.management.service';
import { PermissionsEnum, UserTypes } from '../../../Models/user-rights-enums';
import { AuthService } from '../../../Services/auth-service';

// export for others scripts to use

@Component({
    selector: 'app-login-component',
    templateUrl: './login-component.html',
    styleUrls: ['./login-component.css']
})
export class LoginComponent implements OnInit {

    userLoginForm: FormGroup;
    errorMessage: any;

    constructor(private _fb: FormBuilder,
        private _userManagementService: UserManagementService,
        private _auth: AuthService,
        private router: Router) { }

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
        this.userLoginForm = this._fb.group({
            Username: ['', [Validators.required]],
            Password: ['', [Validators.required]],
        })
    }
    onSubmit() {
        if (this.userLoginForm.valid) {
            this._userManagementService.loginUser(this.userLoginForm.value)
                .subscribe((data) => {
                    this._auth.sendToken(this.userLoginForm.value.Password)
                    this._userManagementService.setUserTypeAndPermissions(data);
                    this.router.navigateByUrl('welcome');
                },
                    error => this.errorMessage = error)
        }
    }
}