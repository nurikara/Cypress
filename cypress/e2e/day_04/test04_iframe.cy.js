/// <reference types='cypress'/>
describe('iframes', function () {

    it('Test Case 01', () => {
        cy.visit('https://the-internet.herokuapp.com/tinymce')

        cy.frameLoaded('#mce_0_ifr')
        cy.iframe().find('p').clear()

        cy.iframe().type('Nuri')
       
        cy.get('.large-4 > div > a').click()
    });
})