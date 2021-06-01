import { Injectable } from '@angular/core';
import {Trip} from './models/trip.model';

@Injectable({
  providedIn: 'root'
})
export class TripsUtilsService {

  readonly MILLISECONDS_IN_DAY = 1000 * 60 * 60 * 24;
  constructor() { }

  getPastTrips = (trips: Trip[]): Trip[] => {
    return trips.filter(this.isPastTrip);
  }

  private isPastTrip = (trip: Trip): boolean => {
   return trip.departureDate ? trip.departureDate < new Date() : false;
  }

  getUpcomingTrips = (trips: Trip[]): Trip[] => {
    return trips.filter(this.isArrivalInMoreThan7Days);
  }

  private isArrivalInMoreThan7Days = (trip: Trip): boolean => {
    if(trip.arrivalDate) {
      const msForArrival = trip.arrivalDate.getTime() - new Date().getTime();
      const daysForArrival = Math.round(msForArrival / this.MILLISECONDS_IN_DAY);
      return daysForArrival > 7;
    } else {
      return false;
    }
  }

  getCurrentTrips = (trips: Trip[]): Trip[] => {
    return trips.filter(this.isCurrentTrip);
  }

  private isCurrentTrip = (trip: Trip): boolean => {
    if (trip.arrivalDate) {
      const msForArrival = trip.arrivalDate.getTime() - new Date().getTime();
      const daysForArrival = Math.round(msForArrival / this.MILLISECONDS_IN_DAY);
      const isDepartureInTheFuture = trip.arrivalDate > new Date();
      return (daysForArrival <= 7) && isDepartureInTheFuture
    } else {
      return false;
    }
  }

}
