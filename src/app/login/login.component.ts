import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  login = {
    name: ' ',
    password: ' '
  }
  Login() {
    console.log("------------credentials:" + this.login.name);
    console.log("------------credentials:" + this.login.password);

    const observable = this.http.post("http://localhost:8086/login/", this.login, { responseType: 'text' });
    observable.subscribe(response => {
      console.log("response from api----" + response);
      if (response == "User") {
        this.router.navigate([""]);
        localStorage.setItem("IsLoggedinApp", "true");
      }
      if (response == "Admin") {
        localStorage.setItem("IsLoggedinApp", "true");
        this.router.navigate(["/admin/airline"])
      }
    },
      (error) => {
        console.log(error);
      })

  }

  constructor(public router: Router, public http: HttpClient) { }

  ngOnInit(): void {
  }

}
