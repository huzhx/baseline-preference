describe('allows user to select their notification preference', () => {
  it('shows a notification preference setting panel under the profile setting', () => {
    cy.visit(`${Cypress.env('BASE_URL')}/auth?access_token=${Cypress.env('AUTH_TOKEN')}`);
    cy.get('[testId="profileContainer"]').click().find('[testId="notificationPreferenceContainer"]');
  });
});
