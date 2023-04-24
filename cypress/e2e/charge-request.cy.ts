describe('template spec', () => {
  it('passes', () => {
    cy.visit('/')

    cy.get('input[name*="first-name"]').type('100')
    cy.get('input[name*="last-name"]').type('254787654321')
    cy.get('.submitcr').click()
  })
})