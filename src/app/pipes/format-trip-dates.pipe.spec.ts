import { FormatTripDatesPipe } from './format-trip-dates.pipe';


describe('FormatTripDatesPipe', () => {

  let pipe: FormatTripDatesPipe;

  beforeEach(() => {
    pipe = new FormatTripDatesPipe();
  })

  it('should format dates with the desired format', () => {
    const formattedTripDate = pipe.transform(new Date('2021-07-12'), new Date('2021-08-14'));
    expect(formattedTripDate).toBe('July 12th to August 14th, 2021');
  });
  it('should format dates, if the month is the same dont repeat it', () => {
    const formattedTripDate = pipe.transform(new Date('2021-07-12'), new Date('2021-07-14'));
    expect(formattedTripDate).toBe('July 12th to 14th, 2021');
  });
  it('should format dates, with the right ordinal in the day 1st 2nd', () => {
    const formattedTripDate = pipe.transform(new Date('2021-07-01'), new Date('2021-07-02'));
    expect(formattedTripDate).toBe('July 1st to 2nd, 2021');
  });
  it('should format dates, with the right ordinal in the day 3rd 4th', () => {
    const formattedTripDate = pipe.transform(new Date('2021-07-03'), new Date('2021-07-04'));
    expect(formattedTripDate).toBe('July 3rd to 4th, 2021');
  });
  it('should format dates, with the right ordinal in the day 11th 12th', () => {
    const formattedTripDate = pipe.transform(new Date('2021-07-11'), new Date('2021-07-12'));
    expect(formattedTripDate).toBe('July 11th to 12th, 2021');
  });

});
