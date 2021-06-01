import { UnshiftFakeTripPipe } from './unshift-fake-trip.pipe';
import {tripsStub} from '../stubs/trips-stub';

describe('UnshiftFakeTripPipe', () => {
  let pipe: UnshiftFakeTripPipe;

  beforeEach(() => {
    pipe = new UnshiftFakeTripPipe();
  })

  it('it should return a new array', () => {
    const hash = 'New Trip';
    const newTrips = pipe.transform(tripsStub, hash);
    expect(newTrips).not.toBe(tripsStub);
  });
  it('it should return the same array of trips with a additional trip at the beginning with the given string as hash', () => {
    const hash = 'New Trip';
    const newTrips = pipe.transform(tripsStub, hash);
    newTrips!.forEach((trip, index) => {
      if(index === 0) {
        expect(trip.hash).toEqual(hash);
      } else {
        expect(trip.hash).toEqual(tripsStub[index - 1].hash);
      }
    });
  });
  it('it should add a trip with the given hash in the case of empty trips array', () => {
    const hash = 'New Trip';
    const newTrips = pipe.transform([], hash);
    expect(newTrips![0].hash).toEqual(hash);
  });

});
