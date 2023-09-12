/// <reference types='cypress'/>

describe('WriteandREad', function(){
    

    it('WriteFile', () => {

       /// cy.writeFile('./cypress/cypress/e2e/day_07/03_notebook.txt',"Hello world")
        cy.writeFile('cypress/e2e/day_07/03_notebook.txt', 'Hello1\n',{flag: 'a+'})
        cy.writeFile('cypress/e2e/day_07/03_notebook.txt', 'Hello2\n',{flag: 'a+'})
        cy.writeFile('cypress/e2e/day_07/03_notebook.txt', 'Hello3\n',{flag: 'a+'})


        
    });

    it('Read File', () => {

        cy.readFile('cypress/e2e/day_07/03_notebook.txt').should('contain', 'Hello2')
        
    });


})