import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  logout() {
    localStorage.removeItem("IsLoggedinApp");
    this.router.navigate(['']);
  }

  constructor(public router: Router) { }

  ngOnInit(): void {
  }

}
