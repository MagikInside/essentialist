import {Pipe, PipeTransform} from '@angular/core';
import {Trip} from '../models/trip.model';

@Pipe({
  name: 'unshiftFakeTrip'
})
export class UnshiftFakeTripPipe implements PipeTransform {

  transform(value: Trip[] | null, hash: string): Trip[] | null {
    if(value) {
      return [{hash, image: '', visibilityStatus: '', arrivalDate: null, departureDate: null,
        title: '', adults: 0, children: 0, infants: 0}, ...value];
    } else {
      return value;
    }
  }

}
