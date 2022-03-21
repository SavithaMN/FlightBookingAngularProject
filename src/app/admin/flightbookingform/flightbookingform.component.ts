import { getLocaleDateFormat } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FlightService } from '../../flight.service';

@Component({
  selector: 'flightbookingform',
  templateUrl: './flightbookingform.component.html',
  styleUrls: ['./flightbookingform.component.css']
})
export class FlightbookingformComponent implements OnInit {
  displayflights = <any>[];
  flight = {
    number: new Number(),
    airlineId: new Number(),
    fromPlace: new String(),
    toPlace: new String(),
    price: new Number(),
    startDateTime: new Date(),
    endDateTime: new Date(),
    instrumentUsed: new String(),
    businessClassSeatsCount: new Number(),
    nonbusinessClassSeatsCount: new Number()
  }

  saveflight() {
    console.log(this.flight);
    const observable = this.flightService.createFLight(this.flight);
    observable.subscribe(response => {
      console.log(response);
    })
    console.log(event);

    console.log(this.flight);
  }

  displayFlights() {
    const observable = this.flightService.displayFlights();
    observable.subscribe(response => {
      console.log(response);
      this.displayflights = response;
    })
  }

  deleteFlight(flightnumber: number) {
    console.log(flightnumber);
    const observable = this.flightService.deleteFlight(flightnumber);
    observable.subscribe(response => {
      console.log(response);
    })
  }

  constructor(public flightService: FlightService) { }

  ngOnInit(): void {

  }

}
