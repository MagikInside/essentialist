import { Component, OnInit } from '@angular/core';
import {Trip} from '../models/trip.model';
import {TripsFacadeService} from '../services/trips-facade.service';
import {Md5} from 'ts-md5/dist/md5';

@Component({
  selector: 'app-new-trip',
  templateUrl: './new-trip.component.html',
  styleUrls: ['./new-trip.component.sass']
})
export class NewTripComponent implements OnInit {

  newTrip: Trip;
  statusOptions = [{status: 'itinerary'}, {status: 'proposal'}];
  showResult = false;

  constructor(private tripsFacade: TripsFacadeService) {
    this.newTrip =  {hash: '', image: '', visibilityStatus: '', arrivalDate: null, departureDate: null, title: '', adults: 0, children: 0, infants: 0 }
  }

  ngOnInit(): void {
  }

  submit(valid: boolean | null) {
    if(valid) {
      this.showResult = true;
      this.newTrip.hash = Md5.hashStr(this.newTrip.title + this.newTrip.destination);
      this.tripsFacade.addTrip(this.newTrip);
    }
  }

}
