/// <reference types='cypress'/>
describe('Suggestons', function () {
it('Test Case 01', () => {
cy.visit('https://www.google.com')
cy.get('#APjFqb').type('Nuri Kara')

cy.get('#ERWdKc > .wM6W7d > span').click()

    
});



})