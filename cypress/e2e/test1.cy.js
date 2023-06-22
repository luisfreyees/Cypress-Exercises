describe('Automation testing 1', () => {
  it('Visits testautomation page', () => {
    cy.visit('https://itera-qa.azurewebsites.net/home/automation')
    cy.get('#name').type("Luis")
    cy.get('#phone').type("3121943269")
    cy.get('#email').type("luisfreyes@gmail.com",{force: true})
    
    cy.get('#male').click().should('be.checked')
    cy.get('#female').should('not.be.checked')
    cy.get('input.form-check-input[type="checkbox"]')
      .should('be.visible')
      .check()
      .should('be.checked')

  })
})