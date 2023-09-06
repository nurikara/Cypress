/// <reference types='cypress'/>
describe('', () => {

it('Back, Forvard, Refresh', () => {

    cy.visit('https://www.koalaresorthotels.com/')
    cy.get('#navLogon > .nav-link').click()

    cy.wait(3000)

   // cy.go('back')
    cy.go(-1)

    //cy.go('forward')

    cy.go(1)

    cy.reload()
});

it.only('Chaing Navigations', () => {
    cy.visit('https://www.koalaresorthotels.com/')
    cy.get('#navLogon > .nav-link').click()

    cy.go('back').go(1).go(-1)

    cy.reload(true)



    
});



})