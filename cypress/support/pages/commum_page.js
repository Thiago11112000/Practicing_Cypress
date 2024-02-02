/// <reference types = "cypress"/>

export default {
acessarCadastroUsuario(){
    cy.visit('/')
    .get('#top_header')

    cy.get('a > .fa-lock ')
    .click()
}
}