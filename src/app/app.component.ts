import { Component } from '@angular/core';

@Component({ //Acts as controller and selector can be used as a tag in index.html
  selector: 'app-root', 
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AngularProject'; //Acts as model
}
