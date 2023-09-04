/// <reference types="cypress" />

describe('example to-do add', function () {
 
  
    it('Amazon Sayfasina Gidilir', () => {

        cy.visit('https://www.amazon.com')

    cy.url().should('include', 'amazon')
    cy.title().should('include', 'Amazon')
   
     cy.get('#twotabsearchtextbox').type('text{enter}')

   

     cy.get('#twotabsearchtextbox').type('urunAdi').type('{enter}')
    

    
    })

    it('Url Test', () => {
       
      
        
    });
})