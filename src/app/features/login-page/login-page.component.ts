import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent {
 
  email: string ="";
  password: string ="";
  
  constructor(
    private http: HttpClient,
    private router: Router
    ) {}


  login() {

    let bodyData = {
      email: this.email,
      password: this.password
    };

    console.log(bodyData);

    this.http.post("http://localhost:8080/api/v1/account/login", bodyData)
    .subscribe((resultData: any) => {
      console.log(resultData);
      if (resultData.message == "Email not exists!") {
        alert("Email not exists!")
      } else if (resultData.message == "Login success!") {
        this.router.navigateByUrl('');
      } else {
        alert("error"); 
      }
    })
  }
  
}
