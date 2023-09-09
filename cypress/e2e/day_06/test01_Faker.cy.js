/// <reference types='cypress'/>
import { faker } from '@faker-js/faker';

describe('Faker' , function (){
it('Test Case 01', () => {

    let name = faker.person.fullName()
    let email = faker.internet.email()

    
    cy.visit('https://automationexercise.com/')

    cy.get('.shop-menu > .nav > :nth-child(4) > a').click()

    cy.get('[data-qa="signup-name"]').type(name)
    cy.get('[data-qa="signup-email"]').type(email)

    cy.get('[data-qa="signup-button"]').click()


    cy.get('[data-qa="password"]').type(faker.internet.password())

    cy.get('[data-qa="days"]').select('20').should('have.value', '20')

    cy.get('[data-qa="months"]').select('April')

    cy.get('[data-qa="years"]').select('1977')
    
    cy.get('#id_gender2').check()
    
});


})
