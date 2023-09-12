/// <reference types='cypress'/>
describe('MultipleWindows', function () {

    it('MultipleWindow', () => {

        cy.visit('https://the-internet.herokuapp.com/windows')

        cy.get('.example > a').invoke('removeAttr','target').click()

        cy.get('h3').should('have.text','New Window')
        
    });

    it.only('New Url', () => {
        cy.visit('https://the-internet.herokuapp.com/windows')

        cy.get('.example > a').then((element) => {

        const url = element.prop('href');
          
        cy.visit(url)

        


})


        
    });
})