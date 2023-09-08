describe('CostumComment', function() {

it('Positive Login', () => {
    cy.visit('https://automationexercise.com/')
    cy.get('.shop-menu > .nav > :nth-child(4)').click()

    cy.get('[data-qa="login-email"]').type('nurikara@yahoo.com')
    cy.get('[data-qa="login-password"]').type('Emre4344')
    cy.get('[data-qa="login-button"]').click()

    cy.get('.nav > :nth-child(10)').should('have.text','nuri')
});

it.only('Commands', () => {
    cy.Login('nurikara@yahoo.com','Emre4344')
    
});

it('Negative Login', () => {
    
});


})