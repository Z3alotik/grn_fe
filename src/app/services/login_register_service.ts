import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";

@Injectable()
export class LoginRegisterService {
    
    name: string ="";
    surname: string ="";
    email: string ="";
    password: string ="";

    constructor(
        private http: HttpClient,
        private router: Router
        ) {}

    login() {
        let req = {
          email: this.email,
          password: this.password
        };
        this.http.post("http://localhost:8080/api/v1/account/login", req)
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