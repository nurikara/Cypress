/// <reference types='cypress'/>
describe('BeforeAfter', function () {

    before(function () {
        cy.log('Her Testten Once Calsir')

        
    })

    after(function () {
        cy.log('Her Testten sonra Calsir')
    })

    beforeEach('Her Testten Once Bir Defa Calisacak', function () {

        cy.log('Her Testten Once Calsir')
    })

    afterEach('Her Testten sonra bir Defa Calisacak', function () {
        cy.log('Her Testten sonra bir defa Calisacak')
    })

    it('Test Case 1', () => {

        cy.log('Test Case 1');
        
    });

    it('Test Case 2', () => {
        cy.log('Test Case 2');


        
    });





})