import {Injectable} from '@angular/core';
import {TripsService} from './trips.service';
import {BehaviorSubject, Observable} from 'rxjs';
import {State} from './models/state.model';
import {distinctUntilChanged, filter, map} from 'rxjs/operators';
import {Trip} from './models/trip.model';
import {TripsUtilsService} from './trips-utils.service';

@Injectable({
  providedIn: 'root'
})
export class TripsFacadeService {
  #state = {
    trips: {count: 0, next: null, previous: null, results: [] as Trip[]}
  }

  private store = new BehaviorSubject<State>(this.#state);
  private state$ = this.store.asObservable();

  trip$: Observable<Trip[]>;
  pastTrip$: Observable<Trip[]>;
  upcomingTrip$: Observable<Trip[]>;
  currentTrip$: Observable<Trip[]>;

  constructor(private tripsService: TripsService, private utils: TripsUtilsService) {
    this.tripsService.trip$.subscribe(trips => {
      this.store.next(this.#state = {...this.#state, trips});
    });
    this.trip$ = this.state$.pipe(map(state => state.trips.results), filter(trips => trips.length > 0), distinctUntilChanged());
    this.pastTrip$ = this.trip$.pipe(map(this.utils.getPastTrips));
    this.upcomingTrip$ = this.trip$.pipe(map(this.utils.getUpcomingTrips));
    this.currentTrip$= this.trip$.pipe(map(this.utils.getCurrentTrips));
  }

  addTrip(trip: Trip) {
    const newTrips = [trip, ...this.#state.trips.results, ];
    this.store.next({trips: {...this.#state.trips, count: this.#state.trips.count + 1, results: newTrips }});
  }

}
