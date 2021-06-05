import dayjs, {Dayjs} from 'dayjs';

describe('New trip page', () => {

  const tripTitle = 'Trip Title';
  let currentTripArrival: Dayjs;
  let currentTripDeparture: Dayjs;
  let upcomingTripArrival: Dayjs;
  let upcomingTripDeparture: Dayjs;
  let pastTripArrival: Dayjs;
  let pastTripDeparture: Dayjs;

  before(() => {
    const today = dayjs(new Date());
    currentTripArrival = today.add(2, 'day');
    currentTripDeparture = today.add(4, 'day');
    upcomingTripArrival = today.add(10, 'day');
    upcomingTripDeparture = today.add(12, 'day');
    pastTripArrival = today.subtract(30, 'day');
    pastTripDeparture = today.subtract(28, 'day');
  });

  beforeEach(() => {
    cy.viewport(1280, 720)
    cy.visit('/');
  });

  it('should add new trip, CURRENT TRIP, and show it in the current trip section in my trips page', () => {
    cy.get('a.add-trip').click();
    cy.fillNewTripForm('proposal', tripTitle, currentTripDeparture.format('DD/MM/YY'), currentTripArrival.format('D/MM/YY'), 'Destination', 'url');
    cy.get('.save').click();
    cy.get('.back').click();
    cy.get('#current-trip').contains(tripTitle);
  });
  it('should add new trip, UPCOMING TRIP, and show it in the upcoming section in my trips page', () => {
    cy.get('a.add-trip').click();
    cy.fillNewTripForm('proposal', tripTitle, upcomingTripDeparture.format('DD/MM/YY'), upcomingTripArrival.format('D/MM/YY'), 'Destination', 'url');
    cy.get('.save').click();
    cy.get('.back').click();
    cy.get('p-accordiontab:first-child .trip').first().should('contain', tripTitle);
  });
  it('should add new trip, PAST TRIP, and show it in the upcoming section in my trips page', () => {
    cy.get('a.add-trip').click();
    cy.fillNewTripForm('proposal', tripTitle, pastTripDeparture.format('DD/MM/YY'), pastTripArrival.format('D/MM/YY'), 'Destination', 'url');
    cy.get('.save').click();
    cy.get('.back').click();
    cy.get('p-accordiontab:nth-child(2) .trip').first().should('contain', tripTitle);
  });



});
