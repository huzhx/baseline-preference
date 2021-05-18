describe('shows data examples in the data sharing forms', () => {
  it('shows data examples in the new data request form', () => {
    cy.visit(`${Cypress.env('BASE_URL')}/data-requests`);
    cy.get('[data-testid="studyRequestButtonContainer"]')
      .first()
      .find('button')
      .click()
      .get('[data-testid="studyInfoButtonContainer"]')
      .find('button')
      .contains(/next/i)
      .click()
      .get('[data-testid="dataExamples"]');
  });

  it('shows data examples in the data request review form', () => {
    cy.visit(`${Cypress.env('BASE_URL')}/consent-history`);
    cy.get('[data-testid="studyRequestButtonContainer"]')
      .first()
      .find('button')
      .click()
      .get('[data-testid="studyInfoButtonContainer"]')
      .find('button')
      .contains(/next/i)
      .click()
      .get('[data-testid="dataExamples"]');
  });
});
