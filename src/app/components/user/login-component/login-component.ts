import { Component, OnInit } from '@angular/core';
import { NgForm, FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Router, ActivatedRoute, Route } from '@angular/router';
import { UserManagementService } from 'src/app/Services/user.management.service';
import { AuthService } from '../../../Services/auth-service';
import * as $ from 'jquery';
@Component({
    selector: 'app-login-component',
    templateUrl: './login-component.html',
    styleUrls: ['./login-component.css']
})
export class LoginComponent implements OnInit {

    public userLoginForm: FormGroup;
    public errorMessage: any;
    public responseMessage: string;
    public labelResponseMessage:string;

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
        let uname = this.userLoginForm.get('Username').value;
        let pwd = this.userLoginForm.get('Password').value;
        this._auth.isUserAuthenticated(uname, pwd).subscribe(
            authenticated => {
                let alert = $('.container>.alert');
                if (authenticated) {
                    this.responseMessage = 'User ' + uname + ' logged in successfully.';
                    this.labelResponseMessage = 'SUCCESS';
                    alert.removeClass('alert-danger').addClass('alert-success');
                    alert.children('strong').show();
                    $(window).ready(function () {
                        setTimeout(function () { alert.fadeIn().animate }, 200);
                        setTimeout(function () { alert.fadeOut().animate }, 1000);
                    });
                    let redirectURL = this._auth.getRedirectUrl();
                    setTimeout(() => {
                        this.router.navigate([redirectURL]);}
                      , 1000);
                } else {
                    this.labelResponseMessage = 'FAILURE';
                    this.responseMessage = 'Invalid Credentials.';
                    alert.removeClass('alert-success').addClass('alert-danger')
                    alert.children('strong').show();
                    $(window).ready(function () {
                        setTimeout(function () { alert.fadeIn().animate }, 200);
                        setTimeout(function () { alert.fadeOut().animate }, 1000);
                    });
                }
            })
    }
}
