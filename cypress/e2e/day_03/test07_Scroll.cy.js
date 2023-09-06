/// <reference types='cypress'/>


describe('Scroll', function (){

it('Test Case 1', () => {

    cy.visit('https://www.koalaresorthotels.com/')

    cy.get('.col-md-7 > .mb-4').scrollIntoView()

    cy.wait(3000)

    cy.get(':nth-child(9) > .container > .justify-content-center > .col-md-7 > h2').scrollIntoView({duration: 3000})

cy.scrollTo(0,0)


});



})