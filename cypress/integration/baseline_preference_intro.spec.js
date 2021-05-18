describe('shows an intro page for baseline preference', () => {
  it('tells users that the preferences can be modified later', () => {
    cy.visit(`${Cypress.env('BASE_URL')}/baseline-preference`);
    cy.get('[data-testid="textContent"]')
      .find('span')
      .contains(/You can always edit your preferences later/);
  });
});
