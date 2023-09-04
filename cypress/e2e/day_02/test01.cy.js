
/// <reference types='cypress'/>

describe('Koala Resort Hotel',   () => {

    it('Log testi', () => {

        cy.visit('https://www.koalaresorthotels.com/')

       // cy.get('#navLogon > .nav-link').click()
cy.contains('Log in').click()

cy.url().should('include','koalaresorthotels')

cy.get('#UserName').type('Manager')
cy.get('#Password').type('Manager1!')
cy.get('#btnSubmit').click()

})


    
});