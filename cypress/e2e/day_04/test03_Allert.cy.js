/// <reference types='cypress'/>
describe('Allert', function () {
it('Test Case 01', () => {

    cy.visit('https://the-internet.herokuapp.com/javascript_alerts')

    cy.wait(2000)
    cy.get(':nth-child(1) > button').click()
    cy.get('#result').should('have.text','You successfully clicked an alert')
});

it('Accept Allert Test', () => {
    cy.visit('https://the-internet.herokuapp.com/javascript_alerts')

    cy.get(':nth-child(2) > button').click()
    cy.get('#result').should('have.text','You clicked: Ok')

});

it('Dismiss', () => {
    cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
    cy.get(':nth-child(2) > button').click()

    cy.on('window:confirm', () =>{

        return false;


    })
    cy.get('#result').should('have.text','You clicked: Cancel')
    
    




    
});
it.only('Allert Text', () => {
    cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
   
    cy.window().then(($windowsElemet) => {

        cy.stub($windowsElemet,'prompt').returns('Cypress')

        
       
})
cy.get(':nth-child(3) > button').click()
cy.get('#result').should('have.text','You entered: Cypress')

    
});


})