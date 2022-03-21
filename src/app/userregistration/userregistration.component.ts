import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-userregistration',
  templateUrl: './userregistration.component.html',
  styleUrls: ['./userregistration.component.css']
})
export class UserregistrationComponent implements OnInit {
  user = {
    name: ' ',
    email: '',
    phonenumber: 0,
    password: ' '
  }
  register() {
    console.log(this.user);
    const observable = this.http.post("http://localhost:8086/UserRegisteration/", this.user);
    observable.subscribe(response => {
      console.log(response);
    })

  }

  constructor(public http: HttpClient) { }

  ngOnInit(): void {
  }

}
