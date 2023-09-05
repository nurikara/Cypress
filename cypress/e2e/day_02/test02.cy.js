/// <reference types='cypress'/>

describe('', function () {

it('Login Test', () => {

    cy.visit('https://www.koalaresorthotels.com/')

   // cy.get('#navLogon > .nav-link').click()

  // cy.contains('#navLogon > .nav-link','Log in').click()

  cy.contains('li','log in',{matchCase:false}).click()

  //cy.get('.row > .mb-4').should(have.textContent)

  cy.get('#navLogon > .nav-link').should('have.text','Log in')

  cy.url().should('include','Account/Logon')

  cy.get('.row > .mb-4').should('be.visible')

  cy.title().should('include','Koala')

  cy.get('li a').should('have.length','29')

cy.get('li').find('a[href="/Rooms/320"]').should('have.text','Twin 1')

cy.get('div.categories').within(() =>{

  cy.get('a[href="/Rooms/320"]').click
})
    
});


})