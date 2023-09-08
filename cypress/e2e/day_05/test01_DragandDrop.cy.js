/// <reference types='cypress'/>
describe('DragandDrop', () => {

    it('Test Case 1', () => {
        cy.visit('https://the-internet.herokuapp.com/drag_and_drop')

        cy.get('#column-a').drag('#column-b').then((success) => {
            assert.isFalse(success)
          })


    });



    
})