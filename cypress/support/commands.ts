declare namespace Cypress {
  interface Chainable<Subject = any> {
    fillNewTripForm(status: string, title: string, departure: string, arrival: string, destination: string, image: string): typeof fillNewTripForm;
  }
}

function fillNewTripForm(status: string, title: string, departure: string, arrival: string, destination: string, image: string): void {
  cy.get('p-dropdown').click();
  cy.contains(status).click();
  cy.get('input[name=title]').type(title);
  cy.get('p-calendar[name=departure]').type(departure);
  cy.get('p-calendar[name=arrival]').type(arrival);
  cy.get('input[name=destination]').type(destination);
  cy.get('input[name=image]').type(image);
}

Cypress.Commands.add("fillNewTripForm",  fillNewTripForm);

