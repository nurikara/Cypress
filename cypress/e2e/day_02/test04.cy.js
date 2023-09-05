/// <reference types='cypress'/>
 describe('Login Test', function () {

it('Positive Test', () => {
const UserName = 'Manager'
const PassWord ='Manager1!'

    cy.visit('https://www.koalaresorthotels.com/')
    cy.contains('Log in').click()
    cy.get('#UserName').type(UserName)
    cy.get('#Password').type(PassWord)
    cy.get('#btnSubmit').click()

    cy.get('.validation-summary-errors > span').should('contain','Try again please')
    
    cy.get('.validation-summary-errors > span').should('have.text','Try again please')

    cy.contains('.validation-summary-errors > span', 'Try again please')

    
});


it.skip('Negative Test', () => {
    cy.visit('https://www.koalaresorthotels.com/')
    cy.contains('Log in').click()

    
});

 })