/// <reference types='cypress'/>

describe('', function () {

it('Login Test', () => {

    cy.visit('https://www.koalaresorthotels.com/')

   // cy.get('#navLogon > .nav-link').click()

   cy.contains('#navLogon > .nav-link','Log in').click()




    
});


})