/// <reference types='cypress'/>
describe('CheckBox', function () {
    it('Test Case 01', () => {
cy.visit('https://www.kitapyurdu.com')
cy.get('.book').click()


//cy.get('li[class="book has-menu active"]').trigger('mouseover')
cy.get('.book > .lvl2 > .js-ajaxCt > :nth-child(1) > .mn-strong').click()

cy.contains('Haftalık').click()

cy.get('.product-filter-header > :nth-child(2)').should('not.be.checked')

cy.get(':nth-child(3) > .custom-checkmark').should('not.be.checked')

cy.get('input[type="checkbox"]').check()

    });
})