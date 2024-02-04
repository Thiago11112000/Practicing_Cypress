export default{

clicar_login(){
    cy.get('#btnLogin')
    .should('be.visible')
    .click()
},
checar_menssagem_invalida(messagen){
    cy.get('.invalid_input')
    .should('have.text', messagen )
},
preencher_email(email){
cy.get('#user')
.type(email)
},
preencher_senha(senha){
    cy.get('#password')
    .type(senha)
},
 marcar_check(){
    cy.get('#materialUnchecked')
    .should('be.visible')
    .check()
 },
 checar_menssagem_valida(email){
 cy.get('#swal2-title')
 .should('be.visible')
 .should('have.text','Login realizado')
 cy.get('.swal2-html-container')
 .should('be.visible')
 .should('have.text' ,`Olá, ${email}` )
 }
}