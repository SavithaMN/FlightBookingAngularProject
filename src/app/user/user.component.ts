import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FlightService } from '../flight.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  searchFlightDetails = {
    fromPlace: 'Bangalore',
    toPlace: 'Chennai',
    startDateTime: new Date(),
    endDateTime: new Date(),
    flightWayMode: "onewayTrip"
  }

  flightWayMode = "";
  displayFlights = <any>[];
  displayReturnFlights = <any>[];
  TotalAmount = 0;


  evtSelectItemDeparture(display: any){
    
    if(!display.isSelected){
      this.TotalAmount += display.price;
      this.flightService.departureFlightnumber = display.number;
      this.flightService.Price =this.TotalAmount;
     }
     else{
       this.TotalAmount -=display.price;
       this.flightService.departureFlightnumber =0;
       this.flightService.Price =this.TotalAmount;
     }

  }
  evtSelectItemReturn(display: any){
    
    if(!display.isSelected){
      this.TotalAmount += display.price;
      this.flightService.returnFlightnumber = display.number;
      this.flightService.Price =this.TotalAmount;
     }
     else{
       this.TotalAmount -=display.price;
       this.flightService.departureFlightnumber =0;
       this.flightService.Price =this.TotalAmount;
     }

  }

  searchFlight() {
    console.log(this.searchFlightDetails.startDateTime);
    if (this.searchFlightDetails.fromPlace) {
      if (this.searchFlightDetails.toPlace) {
        if (this.searchFlightDetails.startDateTime){ 
          if(this.searchFlightDetails.flightWayMode == "onewayTrip"){
            const observable = this.flightService.searchFLightWithStartDate(this.searchFlightDetails);
          observable.subscribe(response => {
            console.log(response);
            this.displayFlights = response;
          })

          }else{
            console.log("coming here--------")
            const observable1 = this.flightService.searchFLightWithStartDate(this.searchFlightDetails);
            observable1.subscribe(response => {
              console.log(response);
              this.displayFlights = response;
            })


            const observable = this.flightService.searchFLightWithEndDate(this.searchFlightDetails);
            observable.subscribe(response => {
            console.log(response);
            this.displayReturnFlights = response;
          })

          }

        } else {
          const observable = this.flightService.searchFLight(this.searchFlightDetails);
          observable.subscribe(response => {
            console.log(response);
            this.displayFlights = response;
          })
        }

      } else
        alert("please select the destination");
    }
    else
      alert("please select the from place");
  }


  // bookFlight(flightnumber: number, price: number) {
  //   //console.log("booking flight" + flightnumber);
  //  // this.flightService.setflightnumber(flightnumber, price);
  //   if (localStorage.getItem("IsLoggedinApp") === "true") {
  //     this.router.navigate(["/bookflight"])
  //   } else
  //     alert("please login!!")
  // }
  bookFlight() {
    //console.log("booking flight" + flightnumber);
   // this.flightService.setflightnumber(flightnumber, price);
    if (localStorage.getItem("IsLoggedinApp") === "true") {
      this.router.navigate(["/bookflight"])
    } else
      alert("please login!!")
  }

  userlogout() {
    localStorage.removeItem("IsLoggedinApp");
    this.router.navigate(['']);
  }

  flightDetailsData = [];

  constructor(public flightService: FlightService, public router: Router) { }

  ngOnInit(): void {
  }

}
