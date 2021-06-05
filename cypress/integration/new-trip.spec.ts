describe('New trip page', () => {

  const tripTitle = 'Trip Title';

  beforeEach(() => {
    cy.viewport(1280, 720)
    cy.visit('/');
  });

  it('should go the the new-trip route when I click in the add trip button', () => {
    cy.get('a.add-trip').click();
    cy.location('pathname').should('eq', '/new-trip');
  });
  it('should disable the save button until all the inputs are filled', () => {
    cy.get('a.add-trip').click();
    cy.get('.save').should('have.class', 'disabled');
  });
  it('should show a warning when you click on STATUS, dont fill the input and click in another place', () => {
    cy.get('a.add-trip').click();
    cy.get('p-dropdown').click();
    cy.get('h1').click();
    cy.get('p-dropdown').should('have.class', 'warning')
  });
  it('should show a warning when you click on TRIP TITLE, dont fill the input and click in another place', () => {
    cy.get('a.add-trip').click();
    cy.get('input[name=title]').click();
    cy.get('h1').click();
    cy.get('input[name=title]').should('have.class', 'warning')
  });
  it('should show a warning when you click on DEPARTURE, dont fill the input and click in another place', () => {
    cy.get('a.add-trip').click();
    cy.get('p-calendar[name=departure]').click();
    cy.get('h1').click();
    cy.get('p-calendar[name=departure]').should('have.class', 'warning')
  });
  it('should show a warning when you click on ARRIVAL, dont fill the input and click in another place', () => {
    cy.get('a.add-trip').click();
    cy.get('p-calendar[name=arrival]').click();
    cy.get('h1').click();
    cy.get('p-calendar[name=arrival]').should('have.class', 'warning')
  });
  it('should show a warning when you click on DESTINATION, dont fill the input and click in another place', () => {
    cy.get('a.add-trip').click();
    cy.get('input[name=destination]').click();
    cy.get('h1').click();
    cy.get('input[name=destination]').should('have.class', 'warning')
  });
  it('should show a warning when you click on URL IMAGE, dont fill the input and click in another place', () => {
    cy.get('a.add-trip').click();
    cy.get('input[name=image]').click();
    cy.get('h1').click();
    cy.get('input[name=image]').should('have.class', 'warning')
  });
  it('should allow click save if all the inputs are filled', () => {
    cy.get('a.add-trip').click();
    cy.fillNewTripForm('proposal', tripTitle, '15/06/21', '10/06/21', 'Destination', 'url');
    cy.get('.save').should('not.have.class', 'disabled');
  });
  it('should add new trip with the filled data and get the result view', () => {
    cy.get('a.add-trip').click();
    cy.fillNewTripForm('proposal', tripTitle, '15/06/21', '10/06/21', 'Destination', 'url');
    cy.get('.save').click();
    cy.get('h1').contains(tripTitle);
  });
  it('should add new trip with the filled data and show it in the current trip section in my trips page', () => {
    cy.get('a.add-trip').click();
    cy.fillNewTripForm('proposal', tripTitle, '15/06/21', '10/06/21', 'Destination', 'url');
    cy.get('.save').click();
    cy.get('.back').click();
    cy.get('#current-trip').contains(tripTitle);
  });
});
