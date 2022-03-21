
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { FlightbookingformComponent } from './admin/flightbookingform/flightbookingform.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AdminComponent } from './admin/admin.component';
import { UserComponent } from './user/user.component';
import { RoutingModule } from './routing/routing.module';
import { NgModule } from '@angular/core';
import { AirlineComponent } from './admin/airline/airline.component';
import { RouterModule, Routes } from '@angular/router';
import { UserregistrationComponent } from './userregistration/userregistration.component';
import { LoginComponent } from './login/login.component';
import { BookflightComponent } from './bookflight/bookflight.component';
import { ManagebookingComponent } from './managebooking/managebooking.component';


// const appRoutes:Routes = [
//   {path: "second-component", component: AdminComponent,
//   children:[
//     {'path':'',component:AirlineComponent},
//     {'path':'flight',component:FlightbookingformComponent}
//   ]},
//   {path:"", component: UserComponent},
//   {path:"**",redirectTo:""}];

@NgModule({
  declarations: [
    AppComponent,
    FlightbookingformComponent,
    AdminComponent,
    UserComponent,
    AirlineComponent,
    UserregistrationComponent,
    LoginComponent,
    BookflightComponent,
    ManagebookingComponent
  ],
  imports: [
    BrowserModule,FormsModule,HttpClientModule, NgbModule,RoutingModule,
    //RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
