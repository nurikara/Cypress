/// <reference types='cypress'/>
describe('viewPorts', function () {

it('TEst Case 01', () => {
    cy.visit('http://www.amazon.com.tr')

    cy.viewport('iphone-8')
    
});



})