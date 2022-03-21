import { Component, OnInit } from '@angular/core';
import { FlightService } from '../flight.service';
import { UserComponent } from '../user/user.component';

@Component({
  selector: 'app-bookflight',
  templateUrl: './bookflight.component.html',
  styleUrls: ['./bookflight.component.css']
})
export class BookflightComponent implements OnInit {
  displayMessage = <any>[];
  display = "Booking has been successful and your pnr is: ";
  flightBookSinglePassenger = {
    name: '',
    gender: '',
    age: 0,
    seatnumber: 1,
    meal: '',
    email: '',
    price: this.flightService.Price
  }

  bookFlight() {

    console.log(this.flightBookSinglePassenger);

    if (this.flightService.departureFlightnumber != 0) {
      console.log("booking departure flight")
      const observable = this.flightService.bookFlight(this.flightBookSinglePassenger);
      observable.subscribe(response => {
        this.displayMessage = response;
        console.log(this.display);
        console.log(this.displayMessage.pnr);
        this.flightService.departureFlightnumber = 0;
      })
    }
    if (this.flightService.returnFlightnumber != 0) {
      console.log("booking return flight")
      const observable = this.flightService.bookReturnFlight(this.flightBookSinglePassenger);
      observable.subscribe(response => {
        this.displayMessage = response;
        console.log(this.display);
        console.log(this.displayMessage.pnr);
        this.flightService.returnFlightnumber = 0;
      })
    }
  }

  constructor(public flightService: FlightService) {
  }

  ngOnInit(): void {
  }

}
