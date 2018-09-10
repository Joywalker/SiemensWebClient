import { Component, AfterViewInit } from '@angular/core';
import { AuthService } from './Services/auth-service';
import { UserManagementService } from './Services/user.management.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  constructor(private auth: AuthService, private userManagementService: UserManagementService) {
  }
  

}

