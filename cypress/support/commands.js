// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
Cypress.Commands.add('Login', (email, password) => { 

    cy.visit('https://automationexercise.com/')
    cy.get('.shop-menu > .nav > :nth-child(4)').click()
    cy.get('[data-qa="login-email"]').type(email)
    cy.get('[data-qa="login-password"]').type(password)
    cy.get('[data-qa="login-button"]').click()

 })

 Cypress.Commands.add('amazonSearch', (productname) => {
cy.visit('https://www.amazon.com.tr/')
cy.get('#twotabsearchtextbox').type(productname)


 })


//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })