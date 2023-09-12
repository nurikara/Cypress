/// <reference types='cypress'/>
describe('readJson', function () {
it('TestCase', () => {


    cy.readFile('E:/cypress/cypress/fixtures/users.json').then((userdata) => {

expect(userdata[3].name).to.equal('Patricia Lebsack')
expect(userdata[3].address.street).to.equal('Hoeger Mall')
    
});



})

})