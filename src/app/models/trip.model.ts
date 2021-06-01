export interface Trip {
  title: string;
  image: string;
  visibilityStatus: string;
  arrivalDate: Date | null;
  departureDate: Date | null;
  hash: string;
  adults: number;
  children: number;
  infants: number
}
