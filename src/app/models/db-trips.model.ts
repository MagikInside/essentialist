import {DbTrip} from './db-trip.model';

export interface DbTrips {
  count: number;
  next: null;
  previous: null;
  results: DbTrip[];
}
