import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router,  } from '@angular/router';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.css']
})
export class RegisterPageComponent {

  name: string ="";
  surname: string ="";
  email: string ="";
  password: string ="";
  
  constructor(
    private http: HttpClient,
    private router: Router
    ) {}

  save() {
    let req = {
      "name": this.name,
      "surname": this.surname,
      "email": this.email,
      "password": this.password,
    };

    this.http.post("http://localhost:8080/api/v1/account/register", req, {responseType: 'text'})
    .subscribe((resultData: any) => {
        console.log(resultData);
        this.router.navigateByUrl('/login');
        alert("User registration succesfull!");
    });
  }
}
