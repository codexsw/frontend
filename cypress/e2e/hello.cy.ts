describe('empty spec', () => {
  it('passes', () => {
    cy.visit('http://localhost:3000/')
    cy.intercept('GET', 'http://localhost:3000/api/hello', {
      statusCode: 200,
      body: { name: 'Jane Doe' },
    }).as('hello')
    cy.get('[data-testid="hello-view-box"]').click()
    cy.wait('@hello')
    cy.get('[data-testid="name-box"]').should('have.text', 'Jane Doe')
  })
})
