import {tripsStub} from './stubs/trips-stub';

import { TripsUtilsService } from './trips-utils.service';
import {Trip} from './models/trip.model';

describe('TripsUtilsService', () => {
  let service: TripsUtilsService;
  let trips: Trip[];

  const TEST_DATE = '2021-05-29';

  beforeAll(() => {
    jasmine.clock().mockDate(new Date(TEST_DATE))
  })
  beforeEach(() => {
    service = new TripsUtilsService();
    trips = tripsStub;
  });

  it('should return the trips with departure date in the past with the getPastTrips method', () => {
    const pastTrips = service.getPastTrips(trips);
    const pastTripsStub = trips.filter(trip => trip.title === 'Past trip');
    expect(pastTrips).toEqual(pastTripsStub);
  });

  it('should return the trips with arrival date more than 7 days in the future with the getUpcomingTrips method', () => {
    const upcomingTrips = service.getUpcomingTrips(trips);
    const upcomingTripsStub = trips.filter(trip => trip.title === 'Upcoming trip');
    expect(upcomingTrips).toEqual(upcomingTripsStub);
  });

  it('should return the trips with arrival date within the next 7 days and departure date in the future', () => {
    const currentTrips = service.getCurrentTrips(trips);
    const currentTripsStub = trips.filter(trip => trip.title === 'Current trip');
    expect(currentTrips).toEqual(currentTripsStub);
  });
});
