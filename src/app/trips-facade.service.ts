import {Injectable} from '@angular/core';
import {TripsService} from './trips.service';
import {BehaviorSubject} from 'rxjs';
import {State} from './models/state.model';
import {distinctUntilChanged, filter, map} from 'rxjs/operators';
import {Trip} from './models/trip.model';

@Injectable({
  providedIn: 'root'
})
export class TripsFacadeService {

  readonly MILLISECONDS_IN_DAY = 1000 * 60 * 60 * 24;
  #state = {
    trips: {  count: 0,      next: null,      previous: null,      results: [] as Trip[]}
  }

  private store = new BehaviorSubject<State>(this.#state);
  private state$ = this.store.asObservable();

  getPastTrips = (trips: Trip[]): Trip[] => {
    return trips.filter(this.isPastTrip);
  }

  isPastTrip = (trip: Trip): boolean => {
    return new Date(trip.departure_date) < new Date();
  }

  getUpcomingTrips = (trips: Trip[]): Trip[] => {
    return trips.filter(this.isArrivalInMoreThan7Days);
  }

  isArrivalInMoreThan7Days = (trip: Trip): boolean => {
    const msForArrival = new Date(trip.arrival_date).getTime() - new Date().getTime();
    const daysForArrival = Math.round(msForArrival / this.MILLISECONDS_IN_DAY);
    return daysForArrival > 7;
  }

  getCurrentTrips = (trips: Trip[]): Trip[] => {
    return trips.filter(this.isCurrentTrip);
  }

  isCurrentTrip = (trip: Trip): boolean => {
    const msForArrival = new Date(trip.arrival_date).getTime() - new Date().getTime();
    const daysForArrival = Math.round(msForArrival / this.MILLISECONDS_IN_DAY);
    const isDepartureInTheFuture = new Date(trip.arrival_date) > new Date();
    return (daysForArrival <= 7) && isDepartureInTheFuture
  }


  trip$ = this.state$.pipe(map(state => state.trips.results), filter(trips => trips.length > 0), distinctUntilChanged());
  pastTrip$ = this.trip$.pipe( map(this.getPastTrips));
  upcomingTrip$ = this.trip$.pipe( map(this.getUpcomingTrips));
  currentTrip$ = this.trip$.pipe( map(this.getCurrentTrips));


  constructor(private tripsService: TripsService) {
    this.tripsService.trip$.subscribe(trips => {
      this.store.next(this.#state = {...this.#state, trips});
    });
  }



}
