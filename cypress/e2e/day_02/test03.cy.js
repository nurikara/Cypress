/// <reference types='cypress'/>

describe('',()=>{

    it('Test Case 1', () => {
        cy.visit('https://automationexercise.com/')

        cy.get('.shop-menu > .nav > :nth-child(4) > a').click()
        cy.contains('.login-form > h2','Login to your account') 
        cy.contains('.signup-form > h2','New User')
        cy.get('.signup-form > h2').should('contain','New User')   
    });

    it('Test Case 2', () => {
        
    });



})