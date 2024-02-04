import commum_page from '../support/pages/commum_page';
import login_page from '../support/pages/login_page';
import { faker } from '@faker-js/faker';

describe('Login', () => {

    const randomName = faker.person.fullName(); 
    const randomEmail =  faker.internet.email();
 beforeEach('Acessar tela de login',()=>{
    commum_page.acessarLoginoUsuario()
 })


 it ('Email vazio',() =>{
  login_page.clicar_login()
  login_page.checar_menssagem_invalida('E-mail inválido.')
 })
 

 it ('Email Inválido',() =>{
    login_page.preencher_email(randomName)
    login_page.clicar_login()
    login_page.checar_menssagem_invalida('E-mail inválido.')
   })
   
 it ('Senha vazia',() =>{
    login_page.preencher_email(randomEmail)
    login_page.clicar_login()
    login_page.checar_menssagem_invalida('Senha inválida.')
   })
   it ('Senha inválida',() =>{
    login_page.preencher_email(randomEmail)
    login_page.preencher_senha('1234')
    login_page.clicar_login()
    login_page.checar_menssagem_invalida('Senha inválida.')
   })
    it.only('Login com sucesso', () => {
     login_page.preencher_email(randomEmail)
     login_page.preencher_senha('123456')
     login_page.marcar_check()
     login_page.clicar_login()
     login_page.checar_menssagem_valida(randomEmail)
    })
    });
