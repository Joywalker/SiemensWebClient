import { Component, OnInit } from '@angular/core';
import { NgForm, FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { UserManagementService } from '../../Services/user.management.service';
declare var jquery: any;
declare var $: any;
import { $, jQuery } from 'jquery';
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
    takeme() 
    {
        console.log("aaa");
        this.router.navigate(['forgot']);
    }

    onSubmit() {
            this._userManagementService.loginUser(this.userLoginForm.value)
                .subscribe((data) => {
                    
                }, 
                error => this.errorMessage = error)
        }
}