/// <reference types = "cypress"/>

export default {
acessarCadastroUsuario(){
    cy.visit('/')
    .get('#top_header')

    cy.get('a > .fa-lock ')
    .click()
},
acessarLoginoUsuario(){
    cy.visit('/')
    .get('#top_header')

    cy.get('.fa-user ')
    .click()
    
}
}