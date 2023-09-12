/// <reference types='cypress'/>



describe('hepsiburada', function() {

before(function(){
    cy.fixture('hepsi').then(function(data) {
this.data=data

    })

})

it('testCase01', function() {
    cy.visit(this.data.url)
    cy.get('.login > a').click()

   cy.get('#login-email').type(this.data.username)

   cy.get('#login-password').type(this.data.password)

   cy.get('.ky-btn-orange').click()

    
});

})

    


    
    
    

