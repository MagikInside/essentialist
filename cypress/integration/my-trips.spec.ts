describe('Main trips main page', () => {

  beforeEach(() => {
    cy.viewport(1280, 720)
    cy.visit('/');
  });

  it('should welcome Mr. Tyler in the header', () => {
    cy.get('header').contains('Welcome Mr. Tyler');
  });
  it('should have links in the header for "ESSENTIALIST", "The Travel Dispatch", "My Trips" and "My profile"', () => {
    const links = ['ESSENTIALIST', 'The Travel Dispatch', 'My Trips', 'My Profile' ];
    cy.get('header a').each((link, index) => {
      expect(link.text()).to.eq(links[index]);
    });
  });
  it('should have a default current trip to Australia', () => {
    cy.get('#current-trip').should('contain', 'AUSTRALIA')
      .and('contain', 'On Going')
      .and('contain', 'July 8th to 12th, 2021')
      .and('contain', '2 People');
  });
  it('should have tabs with Upcoming Trips and Past Trips in a PrimeNg tab', () => {
    cy.get('.p-accordion-tab').contains('Upcoming Trips');
    cy.get('.p-accordion-tab').contains('Past Trips');
  });
  it('should have "Exploring the Fingerlakes" in the Upcoming Trips', () => {
    cy.get('p-accordiontab:first-child .trip').contains('Exploring the Fingerlakes');
  });
  it('should have "Amsterdam" and "Christmas in London" in the Past Trips', () => {
    cy.get('p-accordiontab:nth-child(2) .trip').should('contain', 'Amsterdam')
      .and('contain', 'Christmas in London');
  });
  it('should hide Upcoming Trips when this tab is clicked', () => {
    cy.get('p-accordiontab:first-child .p-accordion-header').click();
    cy.get('p-accordiontab:first-child .trip').first().should('contain', 'Exploring the Fingerlakes')
      .and('not.be.visible');
  });
  it('should hide Past trips Trips when this tab is clicked', () => {
    cy.get('p-accordiontab:nth-child(2) .p-accordion-header').click();
    cy.get('p-accordiontab:nth-child(2) .trip').first().should('contain', 'Amsterdam')
      .and('not.be.visible');
  });
  it('should show again Upcoming Trips when this tab is clicked twice', () => {
    cy.get('p-accordiontab:first-child .p-accordion-header').click();
    cy.get('p-accordiontab:first-child .trip').first().should('contain', 'Exploring the Fingerlakes')
      .and('not.be.visible');
    cy.get('p-accordiontab:first-child .p-accordion-header').click();
    cy.get('p-accordiontab:first-child .trip').first().should('contain', 'Exploring the Fingerlakes')
      .and('be.visible');
  });
  it('should show again Past Trips when this tab is clicked twice', () => {
    cy.get('p-accordiontab:nth-child(2) .p-accordion-header').click();
    cy.get('p-accordiontab:nth-child(2) .trip').first().should('contain', 'Amsterdam')
      .and('not.be.visible');
    cy.get('p-accordiontab:nth-child(2) .p-accordion-header').click();
    cy.get('p-accordiontab:nth-child(2) .trip').first().should('contain', 'Amsterdam')
      .and('be.visible');
  });
});
