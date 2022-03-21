import { Component, OnInit } from '@angular/core';
import { FlightService } from '../flight.service';

@Component({
  selector: 'app-managebooking',
  templateUrl: './managebooking.component.html',
  styleUrls: ['./managebooking.component.css']
})
export class ManagebookingComponent implements OnInit {
  pnr = 0;
  email = '';
  displayBookings = <any>[];

  searchByPnr() {
    const observable = this.flightService.findByPNR(this.pnr);
    observable.subscribe(response => {
      console.log(response);
      this.displayBookings = response;
    })
  }
  searchByEmail() {
    const observable = this.flightService.findByMail(this.email);
    observable.subscribe(response => {
      console.log(response);
      this.displayBookings = response;
    })
  }

  cancelBooking(id: number) {
    const observable = this.flightService.cancelTicket(id);
    if (localStorage.getItem("IsLoggedinApp") === "true") {
      observable.subscribe(response => {
        console.log(response);
        this.displayBookings = response;
      })
    } else
      alert("please login!!")
  }

  constructor(public flightService: FlightService) { }

  ngOnInit(): void {
  }

}
