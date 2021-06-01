import { Component, OnInit } from '@angular/core';
import {Trip} from '../models/trip.model';

@Component({
  selector: 'app-new-trip',
  templateUrl: './new-trip.component.html',
  styleUrls: ['./new-trip.component.sass']
})
export class NewTripComponent implements OnInit {

  newTrip: Trip;
  statusOptions = [{status: 'itinerary'}, {status: 'proposal'}];

  constructor() {
    this.newTrip =  {hash: '', image: '', visibilityStatus: '', arrivalDate: null, departureDate: null, title: '', adults: 0, children: 0, infants: 0 }
  }


  ngOnInit(): void {
  }

}
