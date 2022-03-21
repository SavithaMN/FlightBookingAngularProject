import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from '../user/user.component';
import { AdminComponent } from '../admin/admin.component';
import { RouterModule, Routes } from '@angular/router';
import { FlightbookingformComponent } from '../admin/flightbookingform/flightbookingform.component';
import { AirlineComponent } from '../admin/airline/airline.component';
import { UserregistrationComponent } from '../userregistration/userregistration.component';
import { LoginComponent } from '../login/login.component';
import { BookflightComponent } from '../bookflight/bookflight.component';
import { ManagebookingComponent } from '../managebooking/managebooking.component';

const appRoutes: Routes = [
  { path: "", component: UserComponent },
  { path: "bookflight", component: BookflightComponent },
  { path: "login", component: LoginComponent },
  { path: "signup", component: UserregistrationComponent },
  { path: "manage", component: ManagebookingComponent },
  {
    path: "admin", component: AdminComponent,
    children: [
      { 'path': 'airline', component: AirlineComponent },
      { 'path': 'flight', component: FlightbookingformComponent }
    ]
  },
  { path: "**", redirectTo: "" }];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class RoutingModule { }
