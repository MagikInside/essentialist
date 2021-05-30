import { Pipe, PipeTransform } from '@angular/core';
import {Trip} from '../models/trip.model';

@Pipe({
  name: 'unshiftFakeTrip'
})
export class UnshiftFakeTripPipe implements PipeTransform {

  transform(value: Trip[] | null, hash: string): Trip[] | null {
    if(value) {
      value.unshift({
        hash, image: '', visibility_status: '', arrival_date: '', departure_date: '',
        title: '', adults: 0, children: 0, infants: 0
      });
    }
    return value;
  }

}
