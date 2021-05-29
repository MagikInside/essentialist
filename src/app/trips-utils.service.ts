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
    return new Date(trip.departure_date) < new Date();
  }

  getUpcomingTrips = (trips: Trip[]): Trip[] => {
    return trips.filter(this.isArrivalInMoreThan7Days);
  }

  private isArrivalInMoreThan7Days = (trip: Trip): boolean => {
    const msForArrival = new Date(trip.arrival_date).getTime() - new Date().getTime();
    const daysForArrival = Math.round(msForArrival / this.MILLISECONDS_IN_DAY);
    return daysForArrival > 7;
  }

  getCurrentTrips = (trips: Trip[]): Trip[] => {
    return trips.filter(this.isCurrentTrip);
  }

  private isCurrentTrip = (trip: Trip): boolean => {
    const msForArrival = new Date(trip.arrival_date).getTime() - new Date().getTime();
    const daysForArrival = Math.round(msForArrival / this.MILLISECONDS_IN_DAY);
    const isDepartureInTheFuture = new Date(trip.arrival_date) > new Date();
    return (daysForArrival <= 7) && isDepartureInTheFuture
  }

}
