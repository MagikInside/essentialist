import { Injectable } from '@angular/core';
import {Trips} from './models/trips.model';
import {Observable, of} from 'rxjs';
import * as myTrips from './stubs/my-trips.json'

@Injectable({
  providedIn: 'root'
})
export class TripsService {

  constructor() { }

  get trip$(): Observable<Trips>  {
    return of(myTrips);
  }
}
