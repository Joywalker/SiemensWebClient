import { Component, OnInit } from '@angular/core';
import { NgForm, FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

declare var jquery: any;
declare var $: any;
import { $, jQuery } from 'jquery';
import { UserManagementService } from 'src/app/Services/user.management.service';
import { AuthService } from '../../../Services/auth-service';
import { PermissionsEnum } from '../../../Models/user-rights-enums';

// export for others scripts to use

@Component({
    selector: 'app-login-component',
    templateUrl: './login-component.html',
    styleUrls: ['./login-component.css']
})
export class LoginComponent implements OnInit {

    userLoginForm: FormGroup;
    errorMessage: any;
    invalidCredentialMsg: string;

    constructor(private _fb: FormBuilder,
        private _userManagementService: UserManagementService,
        private _auth: AuthService,
        private router: Router) { }

    togglePassword() {
        $(".toggle-password").click(function() {
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
        let uname = this.userLoginForm.get('Username').value;
        let pwd = this.userLoginForm.get('Password').value;
        this._auth.isUserAuthenticated(uname, pwd).subscribe(
            authenticated => {
                console.log(authenticated);
                if (authenticated) {
                    let url = this._auth.getRedirectUrl();
                    console.log('Redirect url ' + url);
                    this.router.navigate([url]);
                } else {
                    this.invalidCredentialMsg = 'Invalid Credentials.';
                }
            })
    }
}
