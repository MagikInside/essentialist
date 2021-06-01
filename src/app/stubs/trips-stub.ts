import {Trip} from '../models/trip.model';

export const tripsStub = [
  {
    "title": "Past trip",
    "image": "http://res.cloudinary.com/thebellhop/image/upload/v1615890330/mttapaclvwoi7wze1ia5.jpg",
    "visibilityStatus": "itinerary",
    "arrivalDate": new Date("2019-09-11"),
    "departureDate": new Date("2019-09-14"),
    "hash": "8b8b31be3xcv23a54bcbb92dd8b04a07",
    "adults": 1,
    "children": 0,
    "infants": 0
  },
  {
    "title": "Current trip",
    "image": "http://res.cloudinary.com/thebellhop/image/upload/v1565454576/trips/924/loneb-berners-tavern-bar.jpg",
    "visibilityStatus": "itinerary",
    "arrivalDate": new Date("2021-05-30"),
    "departureDate": new Date("2021-06-09"),
    "hash": "7123174eb8354c6eba3f94a44120e66e",
    "adults": 2,
    "children": 0,
    "infants": 0
  },
  {
    "title": "Upcoming trip",
    "image": "http://res.cloudinary.com/thebellhop/image/upload/v1615890805/wukvv1lngdlhb4jtyfli.jpg",
    "visibilityStatus": "itinerary",
    "arrivalDate": new Date("2021-08-10"),
    "departureDate": new Date("2021-08-18"),
    "hash": "913b3e4624e7e4g0c82c8b87f60120cb",
    "adults": 2,
    "children": 3,
    "infants": 0
  },
] as Trip[];
