/// <reference types="cypress" />
describe('Amazon Test',() => {
beforeEach('Amazon Sayfasini Ziyaret eder',() => {

    cy.visit('/')
   
})

it('Url Test', () => {

    cy.url().should('include', 'https://www.amazon.com')
    
});

it('Tittle test', () => {

    cy.title().should('include', 'Amazon')
    
});

it('', () => {
    cy.title().should('include', 'Amazon')

    
    
});

it.skip('Search', () => {
cy.get("input[id='twotabsearchtextbox'],").type('iphone{enter}')

});

it.only('Click', () => {

  cy.get('#nav-link-accountList').click()
    
});









})