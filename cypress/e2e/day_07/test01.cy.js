/// <reference types='cypress'/>

import homepage from "../POM/homepage.cy"
import loginPage from "../POM/loginpage.cy"



describe('hepsiburada', function() {

    before(function(){
        cy.fixture('hepsi').then(function(data) {
    this.data=data
    
        })
    
    })
    
    it('testCase01', function() {
    
         const  Homepage = new homepage
         const  login = new loginPage


       cy.visit(this.data.url)

       
        Homepage.getSignIn()
      
      // cy.get('.login > a').click()

       login.getUsername().type(this.data.userName)
       login.getPassword().type(this.data.passWord)
       login.getClick()
    
    
        
    });
    
    })
    