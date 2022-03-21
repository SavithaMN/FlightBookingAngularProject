import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class FlightService {
  departureFlightnumber = 0;
  returnFlightnumber = 0;
  Price = 0;

  deleteFlight(flightnumber: number) {
    return this.http.delete("http://localhost:8086/flight/airline/inventory/deleteflights/" + flightnumber);
  }

  displayFlights() {
    return this.http.get("http://localhost:8086/flight/airline/inventory/getflights");
  }

  cancelTicket(id: number) {
    return this.http.delete("http://localhost:8086/airline/flight/cancel/ticket/" + id);
  }

  findByPNR(pnr: number) {
    return this.http.get("http://localhost:8086/airline/flight/ticket/" + pnr);
  }

  findByMail(email: string) {
    return this.http.get("http://localhost:8086/airline/flight/booking/history/" + email);
  }

  bookFlight(flightBookSinglePassenger: { name: string; gender: string; age: number; seatnumber: number; meal: string; email: string; }) {
    return this.http.post("http://localhost:8086/airline/flight/booking/" + this.departureFlightnumber, flightBookSinglePassenger);
  }

  bookReturnFlight(flightBookSinglePassenger: { name: string; gender: string; age: number; seatnumber: number; meal: string; email: string; price: number; }) {
    return this.http.post("http://localhost:8086/airline/flight/booking/" + this.returnFlightnumber, flightBookSinglePassenger);
  }

  deleteAirline(id: number) {
    return this.http.delete("http://localhost:8086/airline/delete/" + id);
  }

  unblockAirline(id: number) {
    return this.http.get("http://localhost:8086/airline/unblock/" + id);
  }

  displayAirline() {
    return this.http.get("http://localhost:8086/airline/getAllAirlines");
  }

  searchFLight(searchFlightDetails: { fromPlace: string; toPlace: string; startDateTime: Date; endDateTime: Date; flightWayMode: string; }) {
    return this.http.get("http://localhost:8086/flight/airline/inventory/searchCriteria/" + searchFlightDetails.fromPlace + "/" + searchFlightDetails.toPlace);
    // return this.http.get("http://localhost:8086/flight/airline/inventory/searchCriteria/Bangalore/Chennai");
  }

  searchFLightWithEndDate(searchFlightDetails: { fromPlace: string; toPlace: string; startDateTime: Date; endDateTime: Date; flightWayMode: string; }) {
    console.log("return flight method");
    return this.http.get("http://localhost:8086/flight/airline/inventory/returnflight/" + searchFlightDetails.toPlace + "/" + searchFlightDetails.fromPlace + "/" + searchFlightDetails.endDateTime);
  }
  searchFLightWithStartDate(searchFlightDetails: {
    fromPlace: string; toPlace: string; startDateTime: Date;
    endDateTime: Date; flightWayMode: string;
  }) {
    console.log("start flight method");
    return this.http.get("http://localhost:8086/flight/airline/inventory/searchCriteria/" + searchFlightDetails.fromPlace + "/" + searchFlightDetails.toPlace + "/" + searchFlightDetails.startDateTime);
  }

  blockAirline(number: number) {
    return this.http.get("http://localhost:8086/airline/block/" + number);
  }

  createFLight(flight: {
    number: Number; airlineId: Number; fromPlace: String; toPlace: String; startDateTime: Date; endDateTime: Date;
    instrumentUsed: String; businessClassSeatsCount: Number; nonbusinessClassSeatsCount: Number;
  }) {

    console.log(flight);
    return this.http.post("http://localhost:8086/flight/airline/inventory/add", flight);
  }

  createAirline(airline: { number: number; name: string; isblocked: boolean; }) {
    console.log(airline);
    return this.http.post("http://localhost:8086/airline/add", airline);
    //return this.http.get("http://localhost:8086/airline/getAllAirlines");
    //  {
    //   headers: {
    //     "content-type": 'application/json'
    //   }
    // }
  }

  constructor(public http: HttpClient) { }
}
