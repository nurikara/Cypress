/// <reference types='cypress'/>
describe('Super Domain', function () {


    it('Amazon', () => {
        cy.visit('https://www.amazon.com')

        cy.wait(3000)
        
    });

    it('google', () => {
        cy.visit('https://www.google.com')

        cy.wait(3000)
        
        cy.visit('https://www.amazon.com')

    });




})
