import { Component } from '@angular/core';
import { LoginRegisterService } from 'src/app/services/login_register_service';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.css']
})
export class RegisterPageComponent {

  constructor(
    public loginRegisterService: LoginRegisterService
    ) {}

  save() {
    this.loginRegisterService.save();
  }
}
