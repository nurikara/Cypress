/// <reference types='cypress'/>



describe('fileUpload', function () {

it('singlefile', () => {

    cy.visit('https://davidwalsh.name/demo/multiple-file-upload.php')
const path1 ='bir.png'
    cy.get('#filesToUpload').attachFile(path1)
    cy.get('#fileList > li').should('have.text','bir.png')
    
});

it.only('multible file upload', () => {
    cy.visit('https://davidwalsh.name/demo/multiple-file-upload.php')

    const path1 ='bir.png'
    const path2 ='yeni.xlsx'

    cy.get('#filesToUpload').attachFile([path1,path2])

});


})