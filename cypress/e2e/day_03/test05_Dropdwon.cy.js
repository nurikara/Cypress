/// <reference types='cypress'/>
describe('DropDown', function () {

it('Test Case', () => {

    cy.visit('https://the-internet.herokuapp.com/dropdown')

    cy.wait(3000)

    cy.get('#dropdown').select('Option 1').should('have.value', '1')

    
});




})