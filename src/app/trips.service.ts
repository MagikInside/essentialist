import { Injectable } from '@angular/core';
import {Trips} from './models/trips.model';
import {Observable, of} from 'rxjs';
import * as myTrips from './stubs/my-trips.json'
import {map} from 'rxjs/operators';
import {Trip} from './models/trip.model';
import {DbTrip} from './models/db-trip.model';
import {DbTrips} from './models/db-trips.model';

@Injectable({
  providedIn: 'root'
})
export class TripsService {

  constructor() { }

  get trip$(): Observable<Trips>  {
    return of(myTrips as DbTrips).pipe(
      map(dbTrips => {
        return {...dbTrips, results: dbTrips.results.map(this.transformDbTripToTrip)}
      }));
  }

  transformDbTripToTrip(dbTrip: DbTrip): Trip {
    return {...dbTrip, arrivalDate: new Date(dbTrip.arrival_date), departureDate: new Date(dbTrip.departure_date), visibilityStatus: dbTrip.visibility_status};
  }
}
