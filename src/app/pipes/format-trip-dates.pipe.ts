import { Pipe, PipeTransform } from '@angular/core';
import dayjs from 'dayjs';

@Pipe({
  name: 'formatTripDates'
})
export class FormatTripDatesPipe implements PipeTransform {

  transform(arrivalDate: Date | null | undefined, departureDate: Date | null | undefined): string {
    if (arrivalDate && departureDate) {
      const arrival = dayjs(arrivalDate);
      const departure = dayjs(departureDate);
      const sameMonth = arrival.month() === departure.month() && arrival.year() === departure.year();
      return `${arrival.format('MMMM')} ${this.addOrdinal(arrival.date())} to ${sameMonth ? '' : departure.format('MMMM ')}${this.addOrdinal(departure.date())}, ${departure.year()}`;
    } else {
      return '';
    }
  }

  private addOrdinal(day: number): string {
    const isDayBetween10and19 = Math.floor((day / 10) % 10) === 1
    if (isDayBetween10and19){
      return day + 'th';
    }  else {
      switch (day % 10) {
        case 1: return day + "st";
        case 2: return day + "nd";
        case 3: return day + "rd";
        default: return day + "th";
      }
    }
}
}

