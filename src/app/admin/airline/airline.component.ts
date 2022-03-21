import { Component, OnInit } from '@angular/core';
import { FlightService } from 'src/app/flight.service';

@Component({
  selector: 'app-airline',
  templateUrl: './airline.component.html',
  styleUrls: ['./airline.component.css']
})
export class AirlineComponent implements OnInit {
  airline = {
    number: 10,
    name: ' ',
    isblocked: false
  }

  //blockairline: number=0;
  displayAirline = <any>[];
  save() {
    console.log(this.airline);
    const observable = this.flightService.createAirline(this.airline);
    observable.subscribe(response => {
      console.log(response);
    })
    console.log(event);
    console.log(this.airline.name);
  }
  block(id: number) {
    console.log(id);
    const observable = this.flightService.blockAirline(id);
    observable.subscribe(response => {
      console.log(response);
    })
  }
  unBlock(id: number) {
    console.log(id);
    const observable = this.flightService.unblockAirline(id);
    observable.subscribe(response => {
      console.log(response);
    })
  }
  delete(id: number) {
    console.log(id);
    const observable = this.flightService.deleteAirline(id);
    observable.subscribe(response => {
      console.log(response);
    })
  }
  displayAirlines() {
    const observable = this.flightService.displayAirline();
    observable.subscribe(response => {
      console.log(response);
      this.displayAirline = response;
    })
  }

  constructor(public flightService: FlightService) { }

  ngOnInit(): void {
  }

}
