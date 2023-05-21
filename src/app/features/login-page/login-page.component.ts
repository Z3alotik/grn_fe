import { Component } from '@angular/core';
import { LoginRegisterService } from 'src/app/services/login_register_service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent {
  
  constructor(
    public loginRegisterService: LoginRegisterService
  ) {}

  login() {
    this.loginRegisterService.login();
  }
}
