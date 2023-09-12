
    


class loginPage{

    

getUsername(){

    return  cy.get('#login-email')
    
      
 }

 getPassword(){
    cy.get('#login-password')

}

getClick(){
    cy.get('.ky-btn-orange').click()

}


}


export default loginPage