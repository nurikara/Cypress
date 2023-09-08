/// <reference types='cypress'/>
describe('Amazon', function () {

    it('Custum Commends', () => {
     cy.amazonSearch("Plastic table{enter}")
     cy.get('.a-color-state').should('include.text','Plastic')
     cy.get('#twotabsearchtextbox').should('have.value','Plastic table')
     cy.screenshot()
    });
})