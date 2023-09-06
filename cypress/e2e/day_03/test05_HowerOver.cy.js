/// <reference types='cypress'/>
describe('HoweOver', function () {

it('HowerOver', () => {

    cy.visit('http://www.amazon.com')

    cy.get('.icp-nav-link-inner').trigger('mouseover')
    
    cy.contains('Change country/region').click()

    cy.get('#icp-dropdown').select('Turkey (Türkiye)',{force:true})
});



})