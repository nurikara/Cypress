/// <reference types='cypress'/>
describe('Selector Examples', function () {

it.skip('css', () => {
    cy.visit('http://www.amazon.com')

  //  cy.get('input').click()

  //  cy.get('#twotabsearchtextbox').type('iphone')

  //  cy.get('.nav-search-field').type('mcbook')

  


    
});
it.only('xpath', () => {

    cy.visit('http://www.google.com')

    cy.get('#APjFqb').type('apple{enter}')    
});



})